window.onload=function(){
    var content = new Vue({
        el: '#app',
        data:{
            pageStatus: true,
            isPC: true,
            showMobile: false,
            indexMessage: ['An Interoperable\nFull-Stack DeFi Protocol\non Neo', "基于 Neo 的\n互操作性全栈 DeFi 协议"],
            tipList: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "Crosschain Asset Gateway",
                    text: "for BTC, ETH, USDT, NEO, ONT and more"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "One-Stop Asset Manager",
                    text: "for asset staking and collateralized stablecoin issuance"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "Onchain Liquidity Provision",
                    text: "through Auto Market Maker for crosschain assets, FLM and other NEP-5s"
                },{
                    name: "Perp",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "Perpetual Contract",
                    text: "for virtually any underlying assets with infinite liquidity"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "Decentralized Governance",
                    text: "Let the community shape the future of the protocol"
                }
            ],
            tipListEN: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "Crosschain Asset Gateway",
                    text: "for BTC, ETH, USDT, NEO, ONT and more"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "One-Stop Asset Manager",
                    text: "for asset staking and collateralized stablecoin issuance"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "Onchain Liquidity Provision",
                    text: "through Auto Market Maker for crosschain assets, FLM and other NEP-5s"
                },{
                    name: "Perp",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "Perpetual Contract",
                    text: "for virtually any underlying assets with infinite liquidity"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "Decentralized Governance",
                    text: "Let the community shape the future of the protocol"
                }
            ],
            tipListCN: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "跨链资产网关",
                    text: "实现比特币，以太坊，Neo，本体及基于 Cosmos SDK 等区块链的资产低摩擦双向流动。"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "一站式资管中心",
                    text: "整合了资产质押 / 平台通证挖矿，以及抵押型稳定币发行等多种功能的资管平台。"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "链上流动性提供",
                    text: "通过自动做市商，为跨链资产、FLM，及其他 NEP-5 资产及跨链资产提供链上流动性。"
                },{
                    name: "Perp",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "合成资产/永续合约交易平台",
                    text: "基于自动做市商，为任意数字资产合约提供无限流动性的永续合约/合成资产链上交易平台。"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "去中心化治理",
                    text: "由社区和平台通证持有者决定未来平台的发展方向和关键参数配置。"
                }
            ],
            features: ['Features', "特性"],
            featuresList: [{
                title: "Interoperable DeFi",
                text: "Frictionless access to crypto assets on Neo, Ethereum, Ontology, COSMOS SDK-based Networks and more"
            },{
                title: "Fair Launch",
                text: "0 FLM (Platform token) for pre-sale, pre-mint or team distribution. 100% distributed based on participation"
            },{
                title: "Capital Efficiency",
                text: "Harvest Swap and Perp transaction fee, FLM, and credit allowance seamlessly to maximize your capital gain"
            }],
            featuresListEN: [{
                title: "Interoperable DeFi",
                text: "Frictionless access to crypto assets on Neo, Ethereum, Ontology, COSMOS SDK-based Networks and more"
            },{
                title: "Fair Launch",
                text: "0 FLM (Platform token) for pre-sale, pre-mint or team distribution. 100% distributed based on participation"
            },{
                title: "Capital Efficiency",
                text: "Harvest Swap and Perp transaction fee, FLM, and credit allowance seamlessly to maximize your capital gain"
            }],
            featuresListCN: [{
                title: "互操作性 DeFi",
                text: " 行业第一个实现在多链环境下实现资产双向低摩擦流动的 DeFi 协议，第一期支持 Neo，以太坊，本体和基于 Cosmos SDK 等区块链的资产流动。 "
            },{
                title: "力求平等",
                text: " 平台通证 FLM 0 预挖、预分配和团队预留，100% 分配给资产注入/质押和参与治理者。 "
            },{
                title: "高资金效率",
                text: " 同时获得 SWAP 与永续合约交易手续费，质押挖矿及抵押稳定币信用额度，最大化资金效率。 "
            }],
            timeline: ["Timeline","时间线"],
            showAllTimeline: false,
            timelineList: [{
                time: " 2020.8.14 ",
                text: " Neo MainNet Upgrade \n - Support Crosschain Functionality "
            },{
                time: " 2020.8.18 ",
                text: " Poly Network Launch "
            },{
                time: " 2020.9.23 - 9.25 ",
                text: " WRAPPER Launch \n VAULT Phase 1: NEO + Crosschain Asset Staking "
            },{
                time: " 2020.9.30 ",
                text: "  SWAP Launch \n VAULT Phase 2: LP Token Staking  "
            },{
                time: " 2020.10.28 ",
                text: " VAULT Phase 3: Stablecoin Issuance "
            },{
                time: " 2020.11.25 ",
                text: " PERP Launch "
            },{
                time: " 2020.12.23 ",
                text: " DAO Launch "
            }],
            timelineListEN: [{
                time: " 2020.8.14 ",
                text: " Neo MainNet Upgrade \n - Support Crosschain Functionality "
            },{
                time: " 2020.8.18 ",
                text: " Poly Network Launch "
            },{
                time: " 2020.9.23 - 9.25 ",
                text: " WRAPPER Launch \n VAULT Phase 1: NEO + Crosschain Asset Staking "
            },{
                time: " 2020.9.30 ",
                text: "  SWAP Launch \n VAULT Phase 2: LP Token Staking  "
            },{
                time: " 2020.10.28 ",
                text: " VAULT Phase 3: Stablecoin Issuance "
            },{
                time: " 2020.11.25 ",
                text: " PERP Launch "
            },{
                time: " 2020.12.23 ",
                text: " DAO Launch "
            }],
            timelineListCN: [{
                time: " 2020.8.14 ",
                text: " Neo 主网升级 - 正式支持跨链功能 "
            },{
                time: " 2020.8.18 ",
                text: " Poly Network 主网上线 "
            },{
                time: " 2020.9.23 - 9.25 ",
                text: " WRAPPER 上线 \n VAULT 阶段 1：NEO + 跨链资产质押 "
            },{
                time: " 2020.9.30 ",
                text: " SWAP 上线 \n VAULT 阶段2：LP 通证质押 "
            },{
                time: " 2020.10.28 ",
                text: " VAULT 阶段 3：稳定币发行 "
            },{
                time: " 2020.11.25 ",
                text: " PERP 上线 "
            },{
                time: " 2020.12.23 ",
                text: " DAO 上线 "
            }],
        },
        created:function(){
            this.isPC = document.body.clientWidth>992;
            window.onresize = () => {
                return (() => {
                    this.isPC = document.body.clientWidth>992;
                })();
            };
        },
        methods:{
            // 函数
            changeStatus : function(){
                this.showMobile = false
                this.pageStatus = !this.pageStatus
                if(this.pageStatus) {
                    this.tipList = this.tipListEN
                    this.featuresList = this.featuresListEN
                    this.timelineList = this.timelineListEN
                } else {
                    this.tipList = this.tipListCN
                    this.featuresList = this.featuresListCN
                    this.timelineList = this.timelineListCN
                }
            },
            showToast() {
                this.$message('即将上线。');
            },
            showAllTimelineFN() {
                this.showAllTimeline = true
            },
            showMobileWindow() {
                this.showMobile = !this.showMobile
            }
        },
        computed:{
              
        },
        watch:{
            // 监控
        }
    });
}