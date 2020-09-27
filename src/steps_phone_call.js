
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

const id = {
    'welcome_message': 'welcome_message',
    'welcome_message_2': 'welcome_message_2',
    'empty_message': 'empty_message',

    'phone_call_message': 'phone_call_message',
    'phone_call_message_2': 'phone_call_message_2',
    'phone_call_options': 'phone_call_options',
    'phone_call_success': 'phone_call_success',

    'end_message': 'end_message',
    'end_message_2': 'end_message_2',
    'end_redirect': 'end_redirect',

}

const customers = {
    'mehdi': 'Mehdi Nassim KHODJA',
    'anastasiia': 'Anastasiia KOMISSAROFF',
    'vita': 'Vita POTOCNIK',
    'amin': 'Amine ZEDOURI',
    'monji': 'Monji TATSUKI',
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
        trigger: id.phone_call_message,
        hideInput: true,
    },
    // view dashboard
    {
        id: id.phone_call_message,
        message: `You are in the call with ${customers.amin} ...`,
        trigger: id.phone_call_message_2,
    },
    {
        id: id.phone_call_message_2,
        message: `I understand that the customer want to launch an Order, Do you want to create it for him?`,
        trigger: id.phone_call_options,
    },
    {
        id: id.phone_call_options,
        options: [
            {
                value: 1, label: 'CREATE ORDER', trigger: () => {
                    return id.phone_call_success;
                }
            },
            {value: 2, label: 'No, Thanks', trigger: id.end_message},
        ],
    },
    {
        id: id.phone_call_success,
        message: 'Offer created successfully',
        trigger: id.end_message,
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
