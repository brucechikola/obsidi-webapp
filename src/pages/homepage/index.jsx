import Nav from '../../components/nav';
import Hero from './components/hero';
import TrustedCompanies from './components/trustedCompanies';
import WhyPartner from './components/whyPartner';
import AdditionalTalentSolutions from './components/additionalTalentSolutions';
import PlatformPerformance from './components/platformPerformance';
import Pricing from './components/pricing';
import Footer from '../../components/footer';
import GetStarted from './components/getStarted';
import GetSuccess from './components/getSuccess';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <Nav/>
      <Hero/>
      <TrustedCompanies/>
      <WhyPartner/>
      <AdditionalTalentSolutions/>
      <PlatformPerformance/>
      <Pricing/>
      <Pricing/>
      <GetSuccess/>
      <GetStarted/>
      <Footer/>
    </main>
  );
}