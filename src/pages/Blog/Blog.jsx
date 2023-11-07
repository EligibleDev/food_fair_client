import PageTitle from "../../components/PageTitle/PageTitle";

const Blog = () => {
    return (
        <>
            <PageTitle shortTitle="blog" title="Answers of assignment questions" />
            <section className="container mx-auto -mt-12 shadow-xl bg-[#fcfcfc] py-7 lg:py-16 rounded-xl text-green px-8 xl:px-0">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="flex flex-col gap-6 border-b-[5px] pb-16 border-dotted border-b-[#6254549c]">
                        <h1 className="text-5xl font-title">
                            Q1: What is one way data binding?
                        </h1>
                        <img className="w-full" src="/q1.png" alt="" />
                        <p>
                            One-way data binding is a concept in web development and user
                            interfaces that describes the flow of data from a data source
                            to a view or user interface component. In one-way data
                            binding, data moves in a single direction, typically from the
                            data source to the view, and any changes in the data source
                            are reflected in the view, but not vice versa. This means that
                            the data source is the single source of truth, and changes in
                            the view are not propagated back to the data source.
                        </p>
                        <p>
                            One-way data binding is commonly used in various front-end
                            frameworks and libraries, including React, Angular, and
                            Vue.js. It provides a clear data flow, simplifies debugging,
                            and reduces the likelihood of unexpected side effects in the
                            view. However, it may require additional code or mechanisms if
                            you want to handle user input or interactions and update the
                            data source based on those interactions (which can be achieved
                            through event handling and other techniques).
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 border-b-[5px] py-16 border-dotted border-b-[#6254549c]">
                        <h1 className="text-5xl font-title">
                            Q2: What is NPM in node.js?
                        </h1>
                        <img className="w-full" src="/q2.png" alt="" />
                        <p>
                            NPM (Node Package Manager) is a package manager for JavaScript
                            and Node.js that is widely used to manage and distribute
                            packages (libraries, modules, and dependencies) for Node.js
                            applications. It enables developers to easily install, update,
                            and manage the various software components that their projects
                            depend on.
                        </p>

                        <p>
                            NPM is an essential tool for Node.js development, and it
                            simplifies the process of working with external libraries and
                            packages. It provides a central repository (the NPM registry)
                            where thousands of packages are available for use in your
                            projects. With NPM, you can specify the packages your project
                            depends on in a configuration file (typically package.json),
                            and NPM will automatically download and install these packages
                            along with their dependencies.
                        </p>

                        <p>
                            NPM is a command-line tool, and it comes pre-installed when
                            you install Node.js. You can interact with NPM using commands
                            like &apos;npm install&apos; to install packages, &apos;npm
                            update&apos; to update packages, and &apos;npm start&apos; to
                            run scripts defined in your package.json file, among others.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <h1 className="text-5xl font-title">
                            Q3: What are the deference between mongodb database and mysql
                            database?
                        </h1>
                        <img className="w-full" src="/q3.png" alt="" />
                        <p>
                            MongoDB and MySQL are both popular database management
                            systems, but they differ in several key aspects. Let's explore
                            some of the main differences between them:
                        </p>

                        <p>
                            <strong>1. Data Model:</strong> MongoDB is a NoSQL database,
                            which means it stores data in a flexible, schema-less format,
                            such as JSON-like documents. MySQL, on the other hand, is a
                            relational database that uses tables with predefined schemas.
                        </p>

                        <p>
                            <strong>2. Schema:</strong> In MongoDB, there is no strict
                            schema, making it suitable for dynamic and rapidly changing
                            data. MySQL enforces a fixed schema, which provides structure
                            and ensures data consistency.
                        </p>

                        <p>
                            <strong>3. Query Language:</strong> MongoDB uses a query
                            language designed for working with documents, while MySQL uses
                            SQL (Structured Query Language) for relational data.
                        </p>

                        <p>
                            <strong>4. Scaling:</strong> MongoDB is well-suited for
                            horizontal scaling and can handle large volumes of
                            unstructured data. MySQL is often vertically scaled and may
                            require complex sharding for horizontal scalability.
                        </p>

                        <p>
                            <strong>5. Transactions:</strong> MySQL supports
                            ACID-compliant transactions, making it suitable for
                            applications requiring strict data consistency. MongoDB offers
                            limited support for transactions but is generally considered
                            more suitable for applications with eventual consistency
                            requirements.
                        </p>

                        <p>
                            <strong>6. Use Cases:</strong> MongoDB is often chosen for
                            projects that involve big data, real-time applications, or
                            flexible data models. MySQL is commonly used for traditional,
                            structured data applications, including e-commerce and
                            financial systems.
                        </p>

                        <p>
                            &apos;7. Licensing:&apos; MongoDB has both open-source and
                            commercial editions. MySQL has an open-source version as well
                            as commercial offerings provided by Oracle.
                        </p>

                        <p>
                            In summary, the choice between MongoDB and MySQL depends on
                            your specific project requirements and data characteristics.
                            MongoDB is favored for its flexibility and scalability, while
                            MySQL excels in applications demanding strict data integrity
                            and relational structures.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
