
import { HeroDemo } from '../app/page-ui/hero'
import { FeaturesSectionWithHoverEffectsDemo } from '../app/page-ui/ourresume'
import { Logos3Demo } from '../app/page-ui/topcompany'
import { PricingDemo } from '../app/page-ui/ourpricing'
import { AnimatedTestimonialsDemo } from '../app/page-ui/testimonial'
import { ResumeBuilderNavigationMenu } from "@/components/ui/navigation-menu";
import { FooterDemo } from '../app/page-ui/footer'

export default function Home() {
  return (
    <>
      <div>
        <ResumeBuilderNavigationMenu />
      </div>
      <div>
        <HeroDemo />
      </div>
      <div className="-mt-14">
        <h1 className="text-center text-4xl">Our Features</h1>
        <FeaturesSectionWithHoverEffectsDemo />
      </div>
      <div className="-mt-12 mb-2">
        <Logos3Demo />
      </div>
      <div>
        <PricingDemo />
      </div>
      <div>
        <AnimatedTestimonialsDemo />
      </div>
      <div>
        <FooterDemo />
      </div>
    </>
  );
}
