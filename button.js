var HERO = new Vue({
    el: "#wrap",
    data: {
        hpH : 100,
        hpM : 100,
    },
    methods: {
        attack: function (a) {
            if(a==1){
                this.hpM -= this.randomAtk(10,15);
                this.hpH -= this.randomAtk(5,10);
            }
            if(a==2){
                this.hpM -= this.randomAtk(15,20);
                this.hpH -= this.randomAtk(10,15);
            }
            if(a==3){
                this.hpM = 100;
                this.hpH = 100;
            }
        },
        randomAtk: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
    }
})