import {getProductList} from '../../api/index';

const state = {
    list: [],
    price: [],
    isSelectAll: false
}

const mutations = {
    updateList: (state, {list})=>{
        state.list = list;
    },
    selectItem: (state, {ind})=>{
        let list = state.list;
        list.forEach((item, index)=> {
            if (index == ind){
                item.checked = !item.checked
                console.log('checked...', item);
            }
        });
        state.list = list;
    },
    changeNum: (state, {ind, type})=>{
        state.list.forEach((item, index)=>{
            if (index == ind){
                if (type == '+'){
                    item.count++;
                }else{
                    if (item.count == 0){
                        return;
                    }
                    item.count--;
                }
            }
        })
    },
    totalPrice: (state)=>{
        let price = 0;
        let list = state.list.filter(item=>{
            return item.checked && item.count>0
        });
        console.log(list);
        list.forEach(item=>{
            price += item.prices*item.count;
        })
        state.price = price;
    },
    selectAll: (state, {checked})=>{
        state.isSelectAll = !state.isSelectAll;
        state.list.forEach(item=>{
            item.checked = state.isSelectAll;
        })
    }
}   

const actions = {
    getProductList(context){
        getProductList()
        .then(res=>{
            return res.json();
        }).then(body=>{
            context.commit('updateList', {list:body});
            context.commit('totalPrice');
        })
    },
    selectItem(context, payload){
        context.commit('selectItem', payload);
        context.commit('totalPrice');
    },
    changeNum(context, payload){
        context.commit('changeNum', payload);
        context.commit('totalPrice');
    },
    selectAll(context, payload){
        context.commit('selectAll', payload);
        context.commit('totalPrice');
    }
}

const getters = {

}

export default{
    state,
    mutations,
    actions,
    getters
}