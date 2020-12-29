import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export const store = new VueX.Store({
    state:{
        result:0,
        value: ""
    },
    //ntn mặc định sẽ được lấy dữ liệu từ state.result ở phía trên
    getters:{
        nameResult: ntn => {
            return ntn.result * 10;
        },
        tenResult:pttb=>{
            return pttb.result + " Con vợ";
        },
        value:ntkq=>{
            return ntkq.value;
        }
    },
    //ví dụ về mutation
    mutations:{
        optionIncrement(state,n){
            return state.result+=n;
        },
        decrement(state,n){
            return state.result-=n;
        },
        updateValue(state,payload){
            state.value = payload;
        }
    },
    //xử lý bất đồng bộ
    actions:{
        increment:({commit})=>{
        commit('optionIncrement');
        },
        decrement:({commit})=>{
            commit('decrement');
        },
        updateValue:({commit},payload)=>{
            commit("updateValue",payload);
        }
}
})