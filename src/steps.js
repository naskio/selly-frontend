const id = {
    'welcome_message': 'welcome_message',
    'welcome_message_2': 'welcome_message_2',

    'dashboard_message': 'dashboard_message',
    'dashboard_options': 'dashboard_options',
    'dashboard_success': 'dashboard_success',

    'recommendations_message': 'recommendations_message',
    'recommendations_message_2': 'recommendations_message_2',
    'recommendations_options': 'recommendations_options',
    'recommendations_success': 'recommendations_success',

    'repeat_message': 'repeat_message',
    'repeat_options': 'repeat_options',

    'more_message': 'more_message',
    'more_options': 'more_options',

    'end_message': 'end_message',
    'end_message_2': 'end_message_2',
    'end_redirect': 'end_redirect',

    // recommendations
    'sales_1_message': 'sales_1_message',
    'sales_1_options': 'sales_1_options',
    'sales_1_success': 'sales_1_success',

    'sales_2_message': 'sales_2_message',
    'sales_2_options': 'sales_2_options',
    'sales_2_success': 'sales_2_success',

    'marketing_1_message': 'marketing_1_message',
    'marketing_1_options': 'marketing_1_options',
    'marketing_1_success': 'marketing_1_success',

    'marketing_2_message': 'marketing_2_message',
    'marketing_2_options': 'marketing_2_options',
    'marketing_2_success': 'marketing_2_success',
    'marketing_3_message': 'marketing_3_message',

    'ads_1_message': 'ads_1_message',
    'ads_1_options': 'ads_1_options',
    'ads_1_success': 'ads_1_success',

    'any_1_message': 'any_1_message',

    'any_2_message': 'any_2_message',
}

const urls = {
    'dashboard': 'https://demos.creative-tim.com/argon-dashboard-react/#/admin/index',
    'store': 'https://limitless-test.myshopify.com/',
    'macbook': 'https://073lsyzdw9jzips9-49352081571.shopifypreview.com/products/apple-macbook-air-13-3-led-512-go-ssd-8-go-ram-intel-core-i5-quadricoeur-a-1-1-ghz-gris-sideral-nouveau',
    'p30': 'https://073lsyzdw9jzips9-49352081571.shopifypreview.com/products/smartphone-huawei-p30-pro-dual-sim-128-go-noir',
    'p30_accessory': 'https://073lsyzdw9jzips9-49352081571.shopifypreview.com/products/plasma-series-huawei-p30-case',
    'milk': 'https://073lsyzdw9jzips9-49352081571.shopifypreview.com/products/parmalat-2-reduced-fat-milk-1-qt-pack-of-6',
    't_shirt': 'https://073lsyzdw9jzips9-49352081571.shopifypreview.com/products/nike-sportswear-just-do-it-swoosh',
    'app': 'https://apps.shopify.com/videofy_make_product_videos?surface_detail=video&surface_inter_position=1&surface_intra_position=4&surface_type=search',
}

const products = {
    'macbook': 'Apple MacBook Air 13.3" LED 512 Go SSD 8 Go RAM Intel Core i5 quadricœur à 1.1 GHz Gris Sidéral Nouveau',
    'p30': 'Smartphone Huawei P30 Pro Dual SIM 128 Go Noir',
    'p30_accessory': 'PLASMA SERIES HUAWEI P30 CASE',
    'milk': 'Parmalat 2 % Reduced Fat Milk 1 Qt (Pack of 6)',
    't_shirt': 'Nike Sportswear Just Do It Swoosh',
}

const customers = {
    'mehdi': 'Mehdi Nassim KHODJA',
    'anastasiia': 'Anastasiia KOMISSAROFF',
    'vita': 'Vita POTOCNIK',
    'amin': 'Amine ZEDOURI',
    'monji': 'Monji TATSUKI',
}

const mailUrl = (name) => {
    return `mailto:${name}<hi@example.com>`;
}

function openInNewTab(url, new_tab = true) {
    if (new_tab) {
        const win = window.open(url, '_blank');
        win.focus();
    } else {
        window.open(url, '_self');
    }
}


const steps = [
    // welcome message
    {
        id: id.welcome_message,
        message: 'Hey Sir, I am Selly!',
        trigger: id.welcome_message_2,
        hideInput: true,
    },
    {
        id: id.welcome_message_2,
        message: 'I would be glad to help you',
        trigger: id.dashboard_message,
        hideInput: true,
    },
    // view dashboard
    {
        id: id.dashboard_message,
        message: 'I have prepared some useful charts and insights for you. you can check it in the dashboard',
        trigger: id.dashboard_options,
    },
    {
        id: id.dashboard_options,
        options: [
            {
                value: 1, label: 'View Dashboard', trigger: () => {
                    openInNewTab(urls.dashboard);
                    return id.dashboard_success;
                }
            },
            {value: 2, label: 'No, Thanks', trigger: id.recommendations_message},
        ],
    },
    {
        id: id.dashboard_success,
        message: 'I hope that you liked it and that it was helpful',
        trigger: id.recommendations_message,
    },

    // recommendations
    {
        id: id.recommendations_message,
        message: 'I also have some recommendations for you and it can help to increase the revenue.',
        trigger: id.recommendations_message_2,
    },
    {
        id: id.recommendations_message_2,
        message: 'Please choose what kind of recommendations you prefer?',
        trigger: id.recommendations_options,
    },
    {
        id: id.recommendations_options,
        options: [
            {
                value: 1, label: 'MARKETING', trigger: () => {
                    return id.marketing_1_message;
                }
            },
            {
                value: 2, label: 'SALES', trigger: () => {
                    return id.sales_1_message;
                }
            },
            {
                value: 4, label: 'ANY', trigger: () => {
                    return id.ads_1_message;
                }
            },
            {value: 10, label: 'No, Thanks', trigger: id.end_message},
        ],
    },

    // sales 1: product to customer (related product)
    {
        id: id.sales_1_message,
        message: `I noticed that the customer “${customers.mehdi}” has bought recently a “${products.p30}” and I think he would be interested to buy the related product “${products.p30_accessory}“`,
        trigger: id.sales_1_options,
    },
    {
        id: id.sales_1_options,
        options: [
            {
                value: 1, label: 'SEND BY EMAIL', trigger: () => {
                    openInNewTab(mailUrl(customers.mehdi));
                    return id.sales_1_success;
                }
            },
            {
                value: 2, label: 'CALL HIM', trigger: () => {
                    return id.sales_2_message;
                }
            },
            {value: 10, label: 'Alright!', trigger: id.sales_2_message},
        ],
    },
    {
        id: id.sales_1_success,
        message: `The email has been sent successfully to “${customers.mehdi}”`,
        trigger: id.sales_2_message,
    },

    // sales 2: product to customer (consumable product) after a week
    {
        id: id.sales_2_message,
        message: `I noticed that the customer “${customers.anastasiia}” has bought 2 weeks ago a consumable product“${products.milk}” and I think she would be interested to buy more this week “${products.p30_accessory}“`,
        trigger: id.sales_2_options,
    },
    {
        id: id.sales_2_options,
        options: [
            {
                value: 1, label: 'SEND BY EMAIL', trigger: () => {
                    openInNewTab(mailUrl(customers.mehdi));
                    return id.sales_2_success;
                }
            },
            {
                value: 2, label: 'CALL HIM', trigger: () => {
                    return id.more_message;
                }
            },
            {value: 10, label: 'Alright!', trigger: id.more_message},
        ],
    },
    {
        id: id.sales_2_success,
        message: `The email has been sent successfully to “${customers.anastasiia}”`,
        trigger: id.more_message,
    },
    // marketing 1: suggest a discount
    {
        id: id.marketing_1_message,
        message: `I noticed that the product “${products.macbook}” has not been purchased the last 2 months, Offering a discount of 10% can make it a competitive price`,
        trigger: id.marketing_1_options,
    },
    {
        id: id.marketing_1_options,
        options: [
            {
                value: 1, label: 'OFFER DISCOUNT', trigger: () => {
                    openInNewTab(mailUrl(customers.mehdi));
                    return id.marketing_1_success;
                }
            },
            {value: 10, label: 'No, Thanks', trigger: id.marketing_2_message},
        ],
    },
    {
        id: id.marketing_1_success,
        message: `The discount has been created successfully`,
        trigger: id.marketing_2_message,
    },
    // marketing 2: suggest a discount to a specific user (fidelity)
    {
        id: id.marketing_2_message,
        message: `I noticed that the customer “${customers.vita}” is the best customer this month, offering him a discount of 10% will makes him happy`,
        trigger: id.marketing_2_options,
    },
    {
        id: id.marketing_2_options,
        options: [
            {
                value: 1, label: 'SEND DISCOUNT BY EMAIL', trigger: () => {
                    openInNewTab(mailUrl(customers.vita));
                    return id.marketing_2_success;
                }
            },
            {value: 10, label: 'Alright!', trigger: id.marketing_3_message},
        ],
    },
    {
        id: id.marketing_2_success,
        message: `The email has been sent successfully to "${customers.vita}"`,
        trigger: id.marketing_3_message,
    },
    // marketing 3: suggest a post topic
    {
        id: id.marketing_3_message,
        message: `I noticed that our customers are interested in Kylie Jenner, it would be great to share a post about her in Instagram`,
        trigger: id.more_message,
    },

    // ads 1: suggest to install another Shopify App
    {
        id: id.ads_1_message,
        message: `I would love to suggest the Shopify App "Videofy - Make Product Videos", it can help you to make great videos to promote your products easily`,
        trigger: id.ads_1_options,
    },
    {
        id: id.ads_1_options,
        options: [
            {
                value: 1, label: 'INSTALL APP', trigger: () => {
                    openInNewTab(urls.app);
                    return id.ads_1_success;
                }
            },
            {value: 10, label: 'Alright!', trigger: id.any_1_message},
        ],
    },
    {
        id: id.ads_1_success,
        message: `The app has been installed successfully`,
        trigger: id.any_1_message,
    },

    // any 1: suggest some new product
    {
        id: id.any_1_message,
        message: `I noticed that adding the product ${products.t_shirt} to your store can help you to increase the revenue because many of your customers are looking for it`,
        trigger: id.any_2_message,
    },
    // any 2: suggest some new business
    {
        id: id.any_1_message,
        message: `I just found out that a new local delivery company called "JustInTime" has been founded recently in Berlin, and they are offering a better prices.`,
        trigger: id.more_message,
    },

    // repeat
    {
        id: id.repeat_message,
        message: 'Would you like to get more recommendations?',
        trigger: id.repeat_options,
    },
    {
        id: id.repeat_options,
        options: [
            {
                value: 1, label: 'Yes', trigger: () => {
                    return id.recommendations_options;
                }
            },
            {value: 10, label: 'No, Go back to the Store Panel', trigger: id.end_message},
        ],
    },

    // more
    {
        id: id.more_message,
        message: 'Do you want more recommendations?',
        trigger: id.more_options,
    },
    {
        id: id.more_options,
        options: [
            {
                value: 1, label: 'Yes', trigger: () => {
                    return id.recommendations_message_2;
                }
            },
            {value: 10, label: 'No, Thanks', trigger: id.end_message},
        ],
    },


    // end message
    {
        id: id.end_message,
        message: "Bye! have a nice day",
        trigger: id.end_message_2,
        hideInput: true,
    },
    {
        id: id.end_message_2,
        message: "Don't hesitate to come back if you need more assistance.",
        trigger: () => {
            openInNewTab(urls.store, false);
            return id.end_redirect;
        },
        hideInput: true,
    },
    {
        id: id.end_redirect,
        message: "See you soon!",
        end: true,
    }
];
export default steps;
