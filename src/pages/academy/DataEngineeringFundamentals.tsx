import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Star,
  PlayCircle,
  Download,
  ArrowRight,
  Database,
  Code,
  BookOpen,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataEngineeringFundamentals = () => {
  const curriculum = [
    {
      week: 1,
      title: "Introduction to Data Engineering",
      topics: [
        "Data Engineering Fundamentals",
        "Data Pipeline Architecture",
        "Setting up Development Environment",
        "Python for Data Engineering"
      ],
      duration: "8 hours"
    },
    {
      week: 2,
      title: "Data Extraction & Storage",
      topics: [
        "Data Sources & APIs",
        "Database Fundamentals",
        "SQL Advanced Techniques",
        "Data Warehouse Concepts"
      ],
      duration: "10 hours"
    },
    {
      week: 3,
      title: "ETL/ELT Processes",
      topics: [
        "Extract, Transform, Load Patterns",
        "Data Transformation Techniques",
        "Apache Airflow Introduction",
        "Workflow Orchestration"
      ],
      duration: "12 hours"
    },
    {
      week: 4,
      title: "Big Data Processing",
      topics: [
        "Apache Spark Fundamentals",
        "Distributed Computing",
        "Spark SQL & DataFrames",
        "Performance Optimization"
      ],
      duration: "14 hours"
    },
    {
      week: 5,
      title: "Real-time Data Processing",
      topics: [
        "Apache Kafka Introduction",
        "Stream Processing Concepts",
        "Kafka Streams",
        "Event-Driven Architecture"
      ],
      duration: "12 hours"
    },
    {
      week: 6,
      title: "Data Quality & Governance",
      topics: [
        "Data Quality Frameworks",
        "Data Validation Techniques",
        "Metadata Management",
        "Data Lineage & Cataloging"
      ],
      duration: "10 hours"
    },
    {
      week: 7,
      title: "Cloud Data Engineering",
      topics: [
        "Cloud Data Platforms",
        "AWS/GCP/Azure Data Services",
        "Infrastructure as Code",
        "Cost Optimization Strategies"
      ],
      duration: "12 hours"
    },
    {
      week: 8,
      title: "Final Project & Certification",
      topics: [
        "Capstone Project Design",
        "End-to-End Pipeline Implementation",
        "Peer Review & Feedback",
        "Certification Assessment"
      ],
      duration: "15 hours"
    }
  ];

  const learningOutcomes = [
    "Design and implement scalable data pipelines",
    "Master Apache Spark for large-scale data processing",
    "Build real-time streaming applications with Kafka",
    "Implement data quality and governance frameworks",
    "Deploy data solutions on cloud platforms",
    "Optimize data pipeline performance and costs"
  ];

  const tools = [
    "Python", "SQL", "Apache Spark", "Apache Kafka", "Apache Airflow",
    "Docker", "AWS/GCP/Azure", "PostgreSQL", "MongoDB", "Git"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Database className="h-12 w-12 text-white mr-4" />
              <Badge className="bg-white/20 text-white border-white/30">
                Beginner Level
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Engineering Fundamentals
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Master the core concepts and tools of modern data engineering. Build scalable data pipelines, 
              process big data with Spark, and implement real-time streaming solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <Clock className="h-6 w-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">8 Weeks</div>
                <div className="text-white/80 text-sm">Duration</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <Users className="h-6 w-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">2,400+</div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <Star className="h-6 w-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">4.9/5</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <Award className="h-6 w-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Certificate</div>
                <div className="text-white/80 text-sm">Included</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                Enroll Now - €899
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Preview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary to-accent-data bg-clip-text text-transparent">
                  What You'll Learn
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-success mr-3 mt-1 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Curriculum */}
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-accent-data to-accent-innovation bg-clip-text text-transparent">
                  Course Curriculum
                </span>
              </h3>
              <div className="space-y-4">
                {curriculum.map((week, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-primary font-semibold">
                          Week {week.week}: {week.title}
                        </CardTitle>
                        <Badge variant="outline">{week.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {week.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4 mr-2" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-semibold">Course Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-accent-data mb-2">Prerequisites</h4>
                      <p className="text-sm text-muted-foreground">
                        Basic programming knowledge (Python recommended), SQL fundamentals, 
                        understanding of databases
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-accent-data mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent-data mb-2">Course Format</h4>
                      <p className="text-sm text-muted-foreground">
                        Online, self-paced with weekly live sessions, hands-on projects, 
                        and peer collaboration
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent-data mb-2">Certification</h4>
                      <p className="text-sm text-muted-foreground">
                        Industry-recognized certificate upon successful completion 
                        of all modules and final project
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold text-primary mb-2">€899</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        One-time payment, lifetime access
                      </p>
                      <Button className="w-full mb-3">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor & Support */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent-innovation bg-clip-text text-transparent">
                  Expert Instruction
                </span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Learn from industry veterans with over 10 years of experience in data engineering 
                at leading tech companies. Our instructors bring real-world expertise and 
                practical insights to every lesson.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>Weekly live Q&A sessions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>Personal project feedback</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>Industry mentorship opportunities</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-accent-data to-accent-success bg-clip-text text-transparent">
                  Student Support
                </span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Join a community of learners with dedicated support channels, 
                study groups, and career guidance throughout your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>24/7 community support forum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>Career placement assistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-success mr-3" />
                  <span>Alumni network access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-innovation to-primary bg-clip-text text-transparent">
                Ready to Start Your Data Engineering Journey?
              </span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of professionals who have transformed their careers with our comprehensive training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Enroll Now - €899
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" asChild>
                <Link to="/consultation">
                  Need Help Choosing?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataEngineeringFundamentals;