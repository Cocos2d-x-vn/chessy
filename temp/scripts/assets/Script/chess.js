"use strict";
cc._RFpush(module, 'cdd59kcZPxMN4GBLP/YLny0', 'chess');
// Script/chess.js

cc.Class({
    "extends": cc.Component,

    properties: {
        chessBlack: {
            "default": null,
            type: cc.Node
        },
        chessWhite: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // let chessMgr = require('chessMgr');
        // this.chess.setPosition(chessMgr.getPosition());
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();