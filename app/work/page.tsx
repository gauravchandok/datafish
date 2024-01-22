export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My work</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Data in Motion: Apple's Real-time Revolution for Unmatched Quality </h2>
      <p className="prose prose-neutral dark:prose-invert">
      The emphasis of this project was on delivering instantaneous 
      insights into manufacturing data gathered and stored at Apple's 
      manufacturing partners in China. This was achieved through the 
      implementation of adaptable dashboards and alerts to uphold its 
      quality standards.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      Apple’s data quality team was using its dashboards to observe 
      the data quality of certain products it manufactured in China 
      and intervened manually when required. It took quite a lot of 
      time to correct issues within the data in only a few products 
      at the time so they decided to automate this tedious process 
      while expanding the range of products they were covering and 
      the plants they were observing the data in.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      We migrated many of the stats tables into their own server and 
      created new internal reports to expand visibility into daily 
      data completeness in 6 further plants and 8 more products. We 
      created scripts to pull data from the stats tables daily and 
      send alerts to the contact email for each of the plants when 
      the data completeness fell below 95%. Rather than informing 
      plant supervisors through a series of correspondence after the 
      fact, the approach became more self-informed and the plants in 
      China often had the data corrected within 24 hours. By 2019 the 
      stats tables were processing a few million rows of data daily 
      and we had over 50 reports analyzing them.
      </p>
      <ul>
          <li>
          compressing millions of rows of data into manageable 
          stats tables
          </li>
          <li>
          increased the number of manufacturing plants the data 
          quality team could observe
          </li>
          <li>
          increased the product list whose data could be sufficiently 
          relied upon
          </li>
          <li>
          No interruptions to the business intelligence team that 
          was using the data for their objectives
          </li>
          <li>
          created a program to interact with outside contractors 
          like Qualcomm and only provided them with limited relevant 
          data
          </li>
          <li>
          modified interactions between the data quality team and 
          the manufacturing plants with greater clarity and speed.
          </li>
        </ul>
        
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Responsive Insights: Cisco's Approach to Ad Hoc Reporting Success </h2>
      <p className="prose prose-neutral dark:prose-invert">
      In 2019 Cisco had urgent reporting needs to service its sales, 
      marketing, and billing departments whilst supplying its 
      executive-level staff with new reports detailing the 
      progress of its newly launched smart licenses. 
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      Our services involved various ad hoc requirements and 
      delivering the reporting needs to completion company-wide.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      Early work at Cisco consisted of meetings outlining the 
      requirements into user stories, planning the development 
      timeline, and working on a schedule to deliver the reports 
      to production. 
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      Our reports analyzed the trend of users 
      migrating from traditional licensing to smart licensing, 
      the billing habits of various clients by each quarter, and 
      the impact on sales of specific campaigns the marketing team 
      was focused on.
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Data-Driven Decisions: Navigating Procurement Analytics Excellence at Coveris </h2>
      <p className="prose prose-neutral dark:prose-invert">
      After years of watching the profit margins fall, Coveris 
      embarked on a company-wide policy of cost-cutting which 
      included a data-oriented approach to their procurement practices. 
      The creation of a data warehouse along with new reports for the 
      executive-level staff would impact the procurement decisions 
      being made nationally rather than regionally.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      We were tasked with firming up the data mapping and leading the 
      team of developers to create the warehouse upon which the 
      various reports were built. My experience with ETL scripts, 
      a wide range of BI tools, and technical expertise was ideal 
      for this project.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      We worked with an in-house team to create the data mapping 
      and worked with the developers to create the ETL scripts. 
      We performed tests every few days in the SQL Server environment 
      to test the scrips alongside the existing reports to confirm 
      their accuracy. We translated the existing Excel reports into 
      tableau tables and dashboards including working on newly 
      commissioned reports.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      Post development we worked with the various analysts to design 
      the test cases and perform the UAT before deploying the modified 
      changes in production. By 2018, Coveris had a more efficient 
      procurement decision-making process and was already seeing the 
      benefits with a reduction of 20% in their delivery costs.
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">IA Financial's Compass: Reporting and Compliance in the Modern Landscape </h2>
      <p className="prose prose-neutral dark:prose-invert">
      IA Financial looked to create a compliance page for the various 
      funds on offer to the clients by the sales team. Administrative 
      and management reports about sales and compliance were also part 
      of the scope.
      </p>
    </section>
  );
}
