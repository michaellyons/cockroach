import Image from "next/image";
import StatCard from "./StatCard";
import Frame from "../components/Frame";
import FullScreenGradientBlur from "@/components/FullScreenGradientBlur";

const defaultDictionary = {
  title: "COCKR_OACH DAO",
  description: "15% & 1% of every transaction will go towards the COCKR_OACH DAO. Hosted on Realms, the DAO will take over governance of $COCKR and cam use the funds for various campaigns and initiatives to help promote the adoption and community around $COCKR or the Solana exosystem more generally.",
  buttonText: "Realm DAO Link",
  donatedTitle: "Donated",
  totalFundsTitle: "Total Funds"
}

export const DAOStats = ({ dictionary = defaultDictionary }) => <div className="relative overflow-y-hidden">
  <div className="p-4 md:py-8 lg:py-10 w-full flex relative overflow-y-hidden overflow-visible">
  <div className="grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
<Frame className="md:col-span-2 p-4 md:p-8">
  <h5 className="text-archivo-lg font-bold flex items-center">
    <Image src="/cockr_dao.svg" width={48} height={48} alt="Cockr DAO Logo" className="display-inline mr-2" />{dictionary.title}
  </h5>
  <p className="my-4 mb-10">{dictionary.description}</p>
  <button className="rounded-full px-12 p-2 bg-[#B484FF]" style={{fontWeight: 'bold', color: 'black'}}>{ dictionary.buttonText}</button>
</Frame>
<div className='grid gap-4 flex-column md:col-span-1'>
<StatCard
  title={dictionary.donatedTitle}
  icon={<Image width={24} height={24} alt="donated" src="/donated.svg" />}
  mainValue={'999,999,999'}
  secondaryValue={'999,999,999'}
/>
<StatCard
  title={dictionary.totalFundsTitle}
  icon={<Image width={24} height={24} alt="total_funds" src="/funds.svg" />}
  mainValue={'999,999,999'}
/>
</div>
</div>
</div>
<FullScreenGradientBlur />
</div>

export default DAOStats