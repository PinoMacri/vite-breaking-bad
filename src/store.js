import { reactive } from "vue";
export const store = reactive({
    pokemons: [],
    typePokemons: [],
    currentPage: 1,
    isLoading: false,
})
