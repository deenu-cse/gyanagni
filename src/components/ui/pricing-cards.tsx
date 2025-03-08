import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-14 lg:py-28 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Affordable Plans for Every Need
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Choose a plan that fits your goals and start building your dream resume today.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* Free Plan */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Free
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for getting started. Build a basic resume with essential features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$0</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / forever
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>1 Resume Template</p>
                        <p className="text-muted-foreground text-sm">
                          Access to one professional template.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Basic Customization</p>
                        <p className="text-muted-foreground text-sm">
                          Edit text, colors, and sections.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>PDF Download</p>
                        <p className="text-muted-foreground text-sm">
                          Download your resume in PDF format.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Get Started <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Pro
                  </span>
                </CardTitle>
                <CardDescription>
                  Unlock advanced features and create multiple resumes for different jobs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$9</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited Resumes</p>
                        <p className="text-muted-foreground text-sm">
                          Create and save as many resumes as you need.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>20+ Templates</p>
                        <p className="text-muted-foreground text-sm">
                          Choose from a variety of professional designs.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>ATS Optimization</p>
                        <p className="text-muted-foreground text-sm">
                          Resumes optimized for Applicant Tracking Systems.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-4">
                    Upgrade Now <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Premium
                  </span>
                </CardTitle>
                <CardDescription>
                  For professionals who want the best. Includes all features and priority support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$19</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>All Pro Features</p>
                        <p className="text-muted-foreground text-sm">
                          Everything in the Pro plan, plus more.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Priority Support</p>
                        <p className="text-muted-foreground text-sm">
                          Get help faster with dedicated support.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Custom Branding</p>
                        <p className="text-muted-foreground text-sm">
                          Add your logo and personalize your resume.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Contact Us <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };