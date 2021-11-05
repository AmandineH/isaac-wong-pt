<template>
  <div>
    <div
      class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/images/career.jpg') + '\')',
      }"
    >
      <div
        class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
      ></div>

      <h1 class="relative z-10 supheader-1">Careers</h1>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="mx-auto max-w-1300px p-20px">
        <p class="body-4 text-gray-666666">At Real Estate Analytics we recognize our employees are our greatest asset and we support them in their professional growth and personal lives.  We encourage our team to continue their education, giving them time to achieve this.  Beyond a hybrid work environment, we provide good medical coverage, flexible working hours, nurture a supportive environment, and more.  We are committed to doing what we can to help our employees succeed.</p> 
      </div>
    </div>

    <div class="p-20px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666">
            Positions available
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="my-20px">
            <div
              v-for="(position, key) in positions" :key="key"
              class="items-center justify-between md:flex bg-gray-E8E8F0 p-20px mb-20px">
              <div class="w-3/4">
                <h1 class="title-1 text-blue-191f6C mb-10px">{{ position.title }} - {{ position.occupation }}</h1>
                <h2 class="title-4 mb-10px mt-20px text-blue-333333">Responsibilities</h2>
                <p class="body-4 text-blue-333333 mb-10px" v-html="position.description"></p>
                <h2 class="title-4 mb-10px mt-20px text-blue-333333">Requirements</h2>
                <p class="body-4 text-blue-333333 mb-10px" v-html="position.requirements"></p>
                <p class="flex items-center body-4 text-blue-333333"><img
                src="@/assets/utility/location.svg"
                alt="location" /> {{ position.location }}</p>
              </div>
              <a href="mailto:careers@realestateanalytics.sg">
                <button
                  class="flex items-center border border-blue-00ACD7 p-5px body-4 text-gray-666666 mt-20px md:mt-0"
                >
                  Apply now
                  <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
  data() {
    return {
      positions: [
        {
          title: "Dev Ops Engineer",
          occupation: "Software and Applications Developer",
          description: `
            • Design and implement secure automation solutions for development, testing, and production environments
            <br />• Day-to-day monitoring, backup, deployment and maintenance of systems
            <br />• Writing scripts/programs for service monitoring and health check of systems which perform automated integration flow and alerting
            <br />• Create, maintain, and iterate on our CI/CD processes for new and existing services
            <br />• Help increase system performance with a focus on high availability and scalability
            <br />• Ability to automate repeatable processes via scripts (e.g. via Terraform, bash, Powershell, Ruby, JS, Python, Groovy, etc.)
            <br />• Troubleshooting, performs root cause analysis and working closely with developers to implement corrective/preventive actions during and after an incident
          `,
          requirements: `
            • 3-5 years of professional experience as a DevOps Engineer
            <br />• Minimum Bachelor Degree in Computer Science, Software Engineering or related fields
            <br />• Extensive experience working within AWS and with its managed products like EC2, ECS, ECR, R53, SES, Elasticache, RDS, EKS, etc
            <br />• Experience with containerization and container orchestration services like Docker, Kubernetes
            <br />• Working knowledge of Linux OS and setting up monitoring/logging/tracing systems
            <br />• Self-starter with the ability to appropriately priorities and plan complex work in a rapidly changing environment
            <br />• Excellent spoken and written communication skill, and interpersonal skill
          `,
          location: "Singapore",
        },
        {
          title: "Product Manager",
          occupation: "Information Technology Business Analyst",
          description: `
            • Ideate, validate and iterate solutions quickly
            <br />• Develop and drive product MVPs and roadmaps
            <br />• Discover customers' challenges and needs through research
            <br />• Define, track and measure the set of metrics that would define the success of a product
            <br />• Proactively engage with UI/UX, engineering, QA, marketing and other teams to ensure timely delivery of products
          `,
          requirements: `
            • 3-5 years of experience in product management
            <br />• Proven ability to launch products from conception to delivery with measurable metrics
            <br />• Proven experience in iterative product improvement through the use of data driven analysis
            <br />• Experience working with teams from multiple functional areas in multiple countries - Engineering, UI/UX, Marketing, Sales, Customer Support
            <br />• Experience in designing of simple and intuitive user journeys and interfaces using tools such as Figma, Invision
            <br />• Understanding of technical architecture of complex and highly scalable web and mobile applications
            <br />• Excellent presentation and communication skills to effectively command respect and trust across teams and stakeholders
            <br />• Very strong analytical, multi-tasking and organisation skills
            <br />• Team player, self-starter, energetic personality and a voice of our customers
            <br />• Experimentation using A/B testing would be a plus
            <br />• Working experience in Data Science, Software Engineering, Business Analyst, Quality Assurance or UI/UX design would be a plus
            <br />• A degree in computing, information technology, data analytics or related fields
          `,
          location: "Singapore",
        }
      ]
    }
  }
};
</script>