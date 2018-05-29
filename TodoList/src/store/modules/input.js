const state = {
    text: ''
};

const mutations = {
    changeText(state, res){
        state.text = res;
    }
}

export default{
    state,
    mutations
}