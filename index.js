const App = {
    data() {
        return {
            tabs: [
                { id: "tab1", label: " 按订单汇总" },
                { id: "tab2", label: "按商品汇总" },
                { id: "tab3", label: "按客户汇总" },
                { id: "tab4", label: "按日汇总" },
            ],
            // 选中
            selectedTab: "tab1",
            // 自适应
            colLayout: {
                // xl: 6, // >1920px 4个
                // lg: 8,
                // md: 12,
                // sm: 24,
                // xs: 24,
                span: 3.4,
            },
            //    搜索配置
            formItems: [
                {
                    field: "id",
                    type: "input",
                    placeholder: "销售编码",
                },
                {
                    field: "vendorName",
                    type: "input",
                    placeholder: "供应商名称",
                },
                {
                    field: "productName",
                    type: "input",
                    placeholder: "商品名称",
                },
                {
                    field: "productAliases",
                    type: "input",
                    placeholder: "商品别名",
                },
                {
                    field: "productCategory",
                    type: "select",
                    placeholder: "产品类别",
                    options: [
                        { label: "畜牧", value: "畜牧" },
                        { label: "蔬菜", value: "蔬菜" },
                    ],
                },
                {
                    field: "commodityUnits",
                    type: "select",
                    placeholder: "商品单位",
                    options: [
                        { label: "斤", value: 1 },
                        { label: "公斤", value: 0 },
                    ],
                },
                {
                    field: "documentStatus",
                    type: "select",
                    placeholder: "单据状态",
                    options: [
                        { label: "已完成", value: 1 },
                        { label: "未完成", value: 0 },
                        { label: "待完成", value: 2 },
                    ],
                },
                {
                    field: "createAt",
                    type: "datepicker",
                    otherOptions: {
                        startPlaceholder: "创建开始时间",
                        endPlaceholder: "创建结束时间",
                        type: "daterange",
                    },
                },
            ],
            // 搜索数据
            formData: {},
            // 订单数据
            orders: [],
            currentPage: 1,
            totalPages: 0,
            pageSize: 0
        };
    },
    created() {
        // 根据前端传
        // currentPage: 2,          
        // pageSize: 4,
        //  后端获取数据
        const data = {
            currentPage: 2,
            pageSize: 4,
            totalPages: 5,
            orders: [
                {
                    id: "2324356778745",
                    vendorName: "供应商1",
                    status: "1",
                    create_date: "2023-10-01",
                    itemsgoods: [
                        {
                            productName: "商品1",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 7,
                            quantityPurchased: 45,
                            inboundQuantity: 15,
                            purchaseWeight: 16,
                            theAmountOfThePurchase: 256,
                        },
                        {
                            productName: "商品2",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 47,
                            quantityPurchased: 15,
                            inboundQuantity: 15,
                            purchaseWeight: 46,
                            theAmountOfThePurchase: 356,
                        },
                    ],
                },
                {
                    id: "2324356778748",
                    vendorName: "供应商2",
                    status: "0",
                    create_date: "2023-10-01",
                    itemsgoods: [
                        {
                            productName: "商品3",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 17,
                            quantityPurchased: 14,
                            inboundQuantity: 15,
                            purchaseWeight: 16,
                            theAmountOfThePurchase: 256,
                        },
                        {
                            productName: "商品4",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 147,
                            quantityPurchased: 15,
                            inboundQuantity: 135,
                            purchaseWeight: 146,
                            theAmountOfThePurchase: 356,
                        },
                        {
                            productName: "商品77",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 1477,
                            quantityPurchased: 1215,
                            inboundQuantity: 1335,
                            purchaseWeight: 1464,
                            theAmountOfThePurchase: 356,
                        },
                    ],
                },
                {
                    id: "2324356778748",
                    vendorName: "供应商3",
                    status: "0",
                    create_date: "2023-10-01",
                    itemsgoods: [
                        {
                            productName: "商品3",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 17,
                            quantityPurchased: 14,
                            inboundQuantity: 15,
                            purchaseWeight: 16,
                            theAmountOfThePurchase: 256,
                        },

                        {
                            productName: "商品2",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 147,
                            quantityPurchased: 15,
                            inboundQuantity: 135,
                            purchaseWeight: 146,
                            theAmountOfThePurchase: 356,
                        },
                    ],
                },
                {
                    id: "2324356a778748",
                    vendorName: "供应商4",
                    status: "0",
                    create_date: "2023-10-01",
                    itemsgoods: [
                        {
                            productName: "商品3",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 17,
                            quantityPurchased: 14,
                            inboundQuantity: 15,
                            purchaseWeight: 16,
                            theAmountOfThePurchase: 256,
                        },
                        {
                            productName: "商品4",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 147,
                            quantityPurchased: 15,
                            inboundQuantity: 135,
                            purchaseWeight: 146,
                            theAmountOfThePurchase: 356,
                        },
                        {
                            productName: "商品4",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 147,
                            quantityPurchased: 15,
                            inboundQuantity: 135,
                            purchaseWeight: 146,
                            theAmountOfThePurchase: 356,
                        },
                        {
                            productName: "商品4",
                            productAliases: "",
                            productCategory: "畜牧",
                            commodityUnits: "斤",
                            purchaseUnitPrice: 147,
                            quantityPurchased: 15,
                            inboundQuantity: 135,
                            purchaseWeight: 146,
                            theAmountOfThePurchase: 356,
                        },
                    ],
                },
            ]
        };
        this.getDate(data);
        this.handleResetClick();
    },
    methods: {
        // 处理请求数据方法
        getDate(data) {
            this.currentPage = data.currentPage
            this.totalPages = data.totalPages
            this.pageSize = data.pageSize
            var goods = [];
            data.orders.forEach((order) => {
                var items = order.itemsgoods;
                var subtotal = {
                    id: "小计",
                    purchaseUnitPrice: 0,
                    quantityPurchased: 0,
                    inboundQuantity: 0,
                    purchaseWeight: 0,
                    theAmountOfThePurchase: 0,
                };
                items.forEach((item, index) => {
                    if (index === 0) {
                        goods.push({
                            id: order.id,
                            vendorName: order.vendorName,
                            status: order.status,
                            create_date: order.create_date,
                            productName: item.productName,
                            productAliases: item["productAliases"],
                            productCategory: item["productCategory"],
                            commodityUnits: item["commodityUnits"],
                            purchaseUnitPrice: item.purchaseUnitPrice,
                            quantityPurchased: item.quantityPurchased,
                            inboundQuantity: item.inboundQuantity,
                            purchaseWeight: item.purchaseWeight,
                            theAmountOfThePurchase: item.theAmountOfThePurchase,
                        });
                    } else {
                        goods.push({
                            productName: item.productName,
                            productAliases: item["productAliases"],
                            productCategory: item["productCategory"],
                            commodityUnits: item["commodityUnits"],
                            purchaseUnitPrice: item.purchaseUnitPrice,
                            quantityPurchased: item.quantityPurchased,
                            inboundQuantity: item.inboundQuantity,
                            purchaseWeight: item.purchaseWeight,
                            theAmountOfThePurchase: item.theAmountOfThePurchase,
                        });
                    }
                    // 累加小计
                    subtotal.purchaseUnitPrice += item.purchaseUnitPrice;
                    subtotal.quantityPurchased += item.quantityPurchased;
                    subtotal.inboundQuantity += item.inboundQuantity;
                    subtotal.purchaseWeight += item.purchaseWeight;
                    subtotal.theAmountOfThePurchase += item.theAmountOfThePurchase;
                });
                goods.push(subtotal);
            });
            this.orders = goods;
        },
        //    合并
        calculateColumnSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            let temData = data.filter((item) => item.id === "小计");
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = "合计";
                    return;
                }
                const values = temData.map((item) =>
                    parseFloat(item[column.property])
                );
                if (!values.every((value) => isNaN(value))) {
                    sums[index] = values.reduce((total, value) => {
                        if (!isNaN(value)) {
                            return total + value;
                        } else {
                            return total;
                        }
                    }, 0);

                } else {
                    sums[index] = ''
                }
            });
            return sums;
        },
        selectTab(tabId) {
            this.selectedTab = tabId;
        },
        // 初始化搜索
        handleResetClick() {
            const formOriginData = {};
            for (const item of this.formItems) {
                formOriginData[item.field] = "";
            }
            this.formData = formOriginData;
            console.log(this.formData);
        },
        handleQueryClick() {
            // 发送请求
            console.log(this.formData);
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage; //点击第几页
        },
    },
};
const app = Vue.createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus);
app.mount("#app");