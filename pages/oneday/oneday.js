var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["火币网", "Bithumb", "中国比特币"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    huobi_market_ethcny_detail: {
      amount: {
        title: "24小时成交量",
        value: '-'
      },
      close: {
        title: "当前成交价",
        value: '-'
      },
      open: {
        title: "前推24小时成交价",
        value: '-'
      },
      high: {
        title: "近24小时最高价",
        value: '-'
      },
      low: {
        title: "近24小时最低价",
        value: '-'
      },
      count: {
        title: "近24小时累计成交数",
        value: '-'
      },
      vol: {
        title: "近24小时累计成交额",
        value: '-'
      }
    },
    bithumb_market_ethcny_detail: {
      opening_price: {
        title: "最近24小时内开始交易金额",
        value: '-'
      },
      closing_price: {
        title: "最近24小时内最后交易金额",
        value: '-'
      },
      min_price: {
        title: "最近24小时内最低交易金额",
        value: '-'
      },
      max_price: {
        title: "最近24小时内最高交易金额",
        value: '-'
      },
      average_price: {
        title: "最近24小时内平均交易金额",
        value: '-'
      },
      units_traded: {
        title: "最近24小时内交易量",
        value: '-'
      },
      volume_1day: {
        title: "最近1天内交易量",
        value: '-'
      },
      volume_7day: {
        title: "最近7天内交易量",
        value: '-'
      },
      buy_price: {
        title: "交易等待件最高购买价",
        value: '-'
      },
      sell_price: {
        title: "交易等待件最小销售价",
        value: '-'
      }
    },
    chbtc_market_ethcny_detail: {
      high: {
        title: "最高价",
        value: '-'
      },
      low: {
        title: "最低价",
        value: '-'
      },
      buy: {
        title: "买一价",
        value: '-'
      },
      sell: {
        title: "卖一价",
        value: '-'
      },
      last: {
        title: "最新成交价",
        value: '-'
      },
      vol: {
        title: "最近24小时成交量",
        value: '-'
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.request({
      url: 'https://www.coinfans.info/api/v1/huobi/market/detail',
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res)
        var param = {};
        param["huobi_market_ethcny_detail.close.value"] = res.data.data.tick.close+'元';
        param["huobi_market_ethcny_detail.amount.value"] = res.data.data.tick.amount+'个';
        param["huobi_market_ethcny_detail.open.value"] = res.data.data.tick.open + '元';
        param["huobi_market_ethcny_detail.high.value"] = res.data.data.tick.high + '元';
        param["huobi_market_ethcny_detail.low.value"] = res.data.data.tick.low + '元';
        param["huobi_market_ethcny_detail.count.value"] = res.data.data.tick.count + '笔';
        param["huobi_market_ethcny_detail.vol.value"] = res.data.data.tick.vol + '元';
        that.setData(param);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getHuobiMarketDetail: function () {
    var that = this;
    wx.request({
      url: 'https://www.coinfans.info/api/v1/huobi/market/detail',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        var param = {};
        param["huobi_market_ethcny_detail.close.value"] = res.data.data.tick.close + '元';
        param["huobi_market_ethcny_detail.amount.value"] = res.data.data.tick.amount + '个';
        param["huobi_market_ethcny_detail.open.value"] = res.data.data.tick.open + '元';
        param["huobi_market_ethcny_detail.high.value"] = res.data.data.tick.high + '元';
        param["huobi_market_ethcny_detail.low.value"] = res.data.data.tick.low + '元';
        param["huobi_market_ethcny_detail.count.value"] = res.data.data.tick.count + '笔';
        param["huobi_market_ethcny_detail.vol.value"] = res.data.data.tick.vol + '元';
        that.setData(param);
      }
    })
  },

  getBithumbPublicTicker: function () {
    var that = this;
    wx.request({
      url: 'https://www.coinfans.info/api/v1/bithumb/public/ticker',
      // url: 'https://api.bithumb.com/public/ticker/eth',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        console.log(res.data.data)
        console.log(typeof res.data.data)
        if(!res.data.data) {
          wx.showToast({
            title: '没有读到数据',
          })
        } else {
          var param = {};
          param["bithumb_market_ethcny_detail.opening_price.value"] = res.data.data.data.opening_price + '韩元';
          param["bithumb_market_ethcny_detail.closing_price.value"] = res.data.data.data.closing_price + '韩元';
          param["bithumb_market_ethcny_detail.min_price.value"] = res.data.data.data.min_price + '韩元';
          param["bithumb_market_ethcny_detail.max_price.value"] = res.data.data.data.max_price + '韩元';
          param["bithumb_market_ethcny_detail.average_price.value"] = res.data.data.data.average_price + '韩元';
          param["bithumb_market_ethcny_detail.units_traded.value"] = res.data.data.data.units_traded + '个';
          param["bithumb_market_ethcny_detail.volume_1day.value"] = res.data.data.data.volume_1day + '个';
          param["bithumb_market_ethcny_detail.volume_7day.value"] = res.data.data.data.volume_7day + '个';
          param["bithumb_market_ethcny_detail.buy_price.value"] = res.data.data.data.buy_price + '韩元';
          param["bithumb_market_ethcny_detail.sell_price.value"] = res.data.data.data.sell_price + '韩元';
          that.setData(param);
        }
      }
    })
  },

  getOriginBithumbPublicTicker: function () {
    var that = this;
    wx.request({
      // url: 'https://www.coinfans.info/api/v1/bithumb/public/ticker',
      url: 'https://api.bithumb.com/public/ticker/eth',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        console.log(res.data.data)
        console.log(typeof res.data.data)
        if (!res.data.data) {
          wx.showToast({
            title: '没有读到数据',
          })
        } else {
          var param = {};
          param["bithumb_market_ethcny_detail.opening_price.value"] = res.data.data.opening_price + '韩元';
          param["bithumb_market_ethcny_detail.closing_price.value"] = res.data.data.closing_price + '韩元';
          param["bithumb_market_ethcny_detail.min_price.value"] = res.data.data.min_price + '韩元';
          param["bithumb_market_ethcny_detail.max_price.value"] = res.data.data.max_price + '韩元';
          param["bithumb_market_ethcny_detail.average_price.value"] = res.data.data.average_price + '韩元';
          param["bithumb_market_ethcny_detail.units_traded.value"] = res.data.data.units_traded + '个';
          param["bithumb_market_ethcny_detail.volume_1day.value"] = res.data.data.volume_1day + '个';
          param["bithumb_market_ethcny_detail.volume_7day.value"] = res.data.data.volume_7day + '个';
          param["bithumb_market_ethcny_detail.buy_price.value"] = res.data.data.buy_price + '韩元';
          param["bithumb_market_ethcny_detail.sell_price.value"] = res.data.data.sell_price + '韩元';
          that.setData(param);
        }
      }
    })
  },

  getCHBTCMarketTicker: function () {
    var that = this;
    wx.request({
      url: 'https://www.coinfans.info/api/v1/chbtc/market/ticker',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        var param = {};
        param["chbtc_market_ethcny_detail.high.value"] = res.data.data.ticker.high + '元';
        param["chbtc_market_ethcny_detail.low.value"] = res.data.data.ticker.low + '元';
        param["chbtc_market_ethcny_detail.buy.value"] = res.data.data.ticker.buy + '元';
        param["chbtc_market_ethcny_detail.sell.value"] = res.data.data.ticker.sell + '元';
        param["chbtc_market_ethcny_detail.last.value"] = res.data.data.ticker.last + '元';
        param["chbtc_market_ethcny_detail.vol.value"] = res.data.data.ticker.vol + '个';
        that.setData(param);
      }
    })
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    console.log(e.currentTarget.id)
    if(e.currentTarget.id == 0) {
      this.getHuobiMarketDetail()
    } else if(e.currentTarget.id == 1) {
      this.getBithumbPublicTicker()
    } else {
      this.getCHBTCMarketTicker()
    }
  }

})