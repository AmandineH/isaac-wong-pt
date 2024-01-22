<template>
  <div class="relative overflow-hidden">
    <Carousel
      v-if="assets && assets.length > 0"
      :slides="assets"
      :initialValue="selectedIndex"
      class="w-full"
      :style="`height:${height}`"
    >
      <template #slide="{ slide, index }">
        <Asset
          :asset="slide"
          :overlay="true"
          :background="true"
          @on-click="
            () => {
              isVisible = true;
              selectedIndex = index;
            }
          "
          class="w-full"
          :style="`height:${height}`"
        />
      </template>
    </Carousel>
    <div
      v-else
      class="flex items-center justify-center w-full text-center bg-gray-200"
      :style="`height:${height}`"
    >
      <p class="text-gray-500 text-md-regular">
        {{ $t("notavailable") }}
      </p>
    </div>

    <div
      v-if="assets && assets.length > 0"
      class="absolute flex w-full bottom-8px left-8px"
    >
      <div
        v-for="(category, key) in categories"
        :key="key"
        class="flex items-center blur-sm-dark px-8px py-4px gap-4px button"
        :class="
          key === 0
            ? 'rounded-l-4px border-r-0.5px border-white'
            : key === categories.length - 1
            ? 'rounded-r-4px'
            : 'border-r-0.5px border-white'
        "
        @click="
          category.assets && category.assets.length > 0
            ? (selectedIndex = assets.indexOf(
                assets.find(
                  (element) => element.assetId === category.assets[0].assetId
                )
              ))
            : null
        "
      >
        <p class="text-white text-sm-regular">
          {{ category.assets.length }}
        </p>
        <img :src="category.src" class="w-15px h-15px" />
      </div>
    </div>

    <AssetsExpanded
      v-if="isVisible"
      :isVisible="isVisible"
      :project="project"
      :assets="assets"
      :index="selectedIndex"
      @go-to="goTo"
      @on-close="isVisible = false"
    />
  </div>
</template>

<script>
// components
import Carousel from "@/components/Library/Carousel/CarouselNavigation.vue";
import Asset from "@/components/Library/Assets/Asset.vue";
import AssetsExpanded from "@/components/Library/Assets/AssetsExpanded.vue";

export default {
  name: "Assets",
  components: {
    Carousel,
    Asset,
    AssetsExpanded,
  },
  data() {
    return {
      selectedIndex: 0,
      isVisible: false,
    };
  },
  props: {
    project: {
      type: Object,
    },
    assets: {
      type: Array,
    },
    height: {
      type: String,
    },
  },
  computed: {
    categories() {
      return [
        {
          key: "general",
          src: require("@/assets/project/assets/general.svg"),
          assets: this.assets.filter((element) =>
            ["general", "location", "site-plan"].includes(element?.assetType)
          ),
        },
        {
          key: "virtual-tour",
          src: require("@/assets/project/assets/virtual-tour.svg"),
          assets: this.assets.filter((element) =>
            ["virtual-tour", "video"].includes(element?.assetType)
          ),
        },
        {
          key: "floor-plan",
          src: require("@/assets/project/assets/floor-plan.svg"),
          assets: this.assets.filter((element) =>
            ["floor-plan", "floor-plan-format-portrait"].includes(
              element?.assetType
            )
          ),
        },
      ];
    },
  },
  watch: {
    isVisible() {
      this.$emit("on-expand", this.isVisible);
    },
  },
  methods: {
    goTo(index) {
      let newIndex = this.selectedIndex + index;

      if (newIndex > this.assets.length - 1) {
        this.selectedIndex = 0;
      } else if (newIndex < 0) {
        this.selectedIndex = this.assets.length - 1;
      } else {
        this.selectedIndex = newIndex;
      }
    },
  },
};
</script>
