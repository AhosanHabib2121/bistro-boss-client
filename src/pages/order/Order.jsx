import { useState } from 'react';
import orderImage from '../../assets/shop/banner2.jpg'
import Cover from '../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

   
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            {/* website naming title */}
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover
                bgImg={orderImage}
                title={'OUR Food'}
                shortDes={'Would you like to try a dish?'}

            />
            {/* Food category */}
            <div className=' my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'uppercase text-center'}>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab item={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={desserts} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;