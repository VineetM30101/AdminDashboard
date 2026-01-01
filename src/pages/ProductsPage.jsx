import {AlertTriangle, DollarSign, Package, TrendingUp} from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/commom/Header";
import StatCard from "../components/commom/StatCard";
import ProductTable from "../components/products/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Products'></Header>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20'>
        {/*Stats*/}
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity:0 , y:20}}
        animate={{opacity:1, y: 0}}
        transition={{duration:1}}>
          <StatCard name="Total Products" icon={Package} value={456} color="	#e5c99d"/>
          <StatCard name="Top Selling" icon={TrendingUp} value={1433} color="#52e500"/>
          <StatCard name="Low Stock" icon={AlertTriangle} value={647} color="#ffd62e"/>
          <StatCard name="Total revenue" icon={DollarSign} value={12.5} color="#10B981"/>
        </motion.div>

        <ProductTable/>
        {/*Charts */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart/>
          <CategoryDistributionChart/>
        </div>
        </main>
    </div>
  );
};

export default ProductsPage;
