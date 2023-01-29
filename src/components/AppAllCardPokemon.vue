<script>
import { store } from "../store"
export default {
    name: "AppAllCardPokemon",
    data() {
        return {
            store: store,

        }

    }
}
</script>

<template>

    <div v-for="pokemon in store.pokemons" :key="pokemon._id"
        class=" cards mb-3 mt-3 mx-3 text-center d-flex justify-content-center ">


        <div :class="pokemon.type1" class="cardImg d-flex flex-column justify-content-between  p-4 pt-2 pb-2">
            <div> {{`${pokemon.number} `}} </div>
            <div class="namePokemon d-flex justify-content-center ">
                <h5>{{ pokemon.name }}</h5>
            </div>
            <div class="circleImg d-flex align-items-center justify-content-center w-100">
                <img :src=pokemon.imageUrl alt="">
            </div>

            <div :class="pokemon.type1" class="namePokemon typeInterno d-flex justify-content-center mt-3">{{
                pokemon.type1
            }}</div>
            <div class="sp mt-2">SPECIFIC</div>
            <div class="d-flex text-start justify-content-between ">
                <div class="block-1 mr-1">
                    <div class="specific d-flex justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0  mr-5 bold">HP:</p> <span>{{ pokemon.hp }}</span>
                    </div>
                    <div class="specific p-1 specific d-flex  justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0 bold">ATT:</p> <span>{{ pokemon.atk }}</span>
                    </div>
                    <div class="specific  p-1 specific d-flex justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0 bold">DEF:</p> <span>{{ pokemon.def }}</span>
                    </div>
                </div>
                <div class="block-2">
                    <div class="specific p-1 specific d-flex justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0 bold">SPEED:</p> <span>{{ pokemon.spd }}</span>
                    </div>
                    <div class="specific p-1 specific d-flex justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0 bold">ATT SPEC:</p> <span>{{ pokemon.sp_atk }}</span>
                    </div>
                    <div class="specific p-1 specific d-flex justify-content-between p-1 align-items-center ">
                        <p class="d-inline m-0 bold">DEF SPEC:</p> <span>{{ pokemon.sp_def }}</span>
                    </div>
                </div>
            </div>
            <div class="pb-1 p-2">
                <p class="d-inline bold">TOTAL :</p> <span>{{ pokemon.sp_def }}</span>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.block-1 {
    width: 31%;
}

.block-2 {
    width: 50%;
}

.specific {
    font-size: 9px;
}

.bold {
    font-weight: bold;
}

.typeInterno {
    border-radius: 20px;
    padding: 0px 30px;
    box-shadow: 1px 1px 20px black, 0 0 1em blue, 0 0 0.2em red;
    margin-top: 10px;

}

div {
    color: white;
}

.Water {
    background: linear-gradient(-90deg, rgb(81, 171, 255), #001aff, #52a3ff, rgb(0, 4, 255), rgb(43, 160, 255));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Dark {
    background: linear-gradient(-90deg, rgb(61, 58, 58), #000000, #4e4949, rgb(0, 0, 0), rgb(48, 46, 46));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Fighting {
    background: linear-gradient(-90deg, rgb(255, 141, 141), brown, rgb(233, 125, 125), rgb(134, 21, 21), rgb(212, 116, 116));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Fire {
    background: linear-gradient(-90deg, rgb(255, 128, 128), #800707, #da4242, rgb(129, 17, 17), rgb(255, 0, 0));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Grass {
    background: linear-gradient(-90deg, rgb(58, 216, 66), #33941f, #56fc64, rgb(40, 158, 30), rgb(28, 136, 34));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Bug {
    background: linear-gradient(-90deg, rgb(138, 120, 137), #750080, #8a7d8d, rgb(93, 0, 129), rgb(133, 119, 134));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Normal {
    background: linear-gradient(-90deg, rgb(153, 111, 111), rgb(29, 22, 22), #966c6c, rgb(43, 32, 32), rgb(141, 106, 106));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Poison {
    background: linear-gradient(-90deg, rgb(255, 130, 199), rgb(170, 4, 129), rgb(255, 130, 199), rgb(170, 4, 129), rgb(255, 130, 199));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Electric {
    background: linear-gradient(-90deg, rgb(243, 219, 158), goldenrod, rgb(243, 222, 167), goldenrod, rgb(197, 179, 135));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Ground {
    background: linear-gradient(-90deg, rgb(136, 98, 98), rgb(100, 35, 35), rgb(136, 98, 98), rgb(100, 35, 35), rgb(136, 98, 98));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Ice {
    background: linear-gradient(-90deg, rgb(162, 210, 255), rgb(0, 174, 255), #52a3ff, rgb(162, 210, 255), rgb(0, 174, 255));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Fairy {
    background: linear-gradient(-90deg, rgb(255, 153, 170), rgb(255, 207, 215), rgb(255, 155, 172), rgb(255, 216, 240), rgb(255, 163, 178), );
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Steel {
    background: linear-gradient(-90deg, rgb(196, 185, 158), rgb(148, 137, 108), rgb(206, 195, 168), rgb(148, 137, 108), rgb(199, 189, 164), );
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Psychic {
    background: linear-gradient(-90deg, rgb(255, 130, 199), rgb(43, 0, 32), rgb(255, 130, 199), rgb(43, 0, 32), rgb(255, 130, 199));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Rock {
    background: linear-gradient(-90deg, rgb(65, 63, 57), rgb(154, 154, 179), rgb(65, 63, 57), rgb(165, 159, 141), rgb(65, 63, 57));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Dragon {
    background: linear-gradient(-90deg, rgb(90, 79, 79), rgb(72, 72, 126), rgb(18, 22, 56), rgb(26, 26, 65), rgb(72, 72, 126));
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Ghost {
    background: linear-gradient(-90deg, rgb(255, 255, 255), rgb(57, 57, 65), rgb(83, 74, 74), rgb(57, 57, 65), white);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

.Flying {
    background: linear-gradient(-90deg, rgb(160, 255, 250), rgb(2, 133, 126), rgb(137, 255, 249), rgb(2, 133, 126), rgb(159, 255, 250), );
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


img {
    width: 75px;
    height: 75px;

}

.cardImg {
    width: 220px;
    height: 420px;
    box-shadow: 1px 1px 5px 2px black;
    border-radius: 30px;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 3px 3px 25px 5px black;
    }

}

div.circleImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    padding: 30px;


    img {
        width: 100%;
        height: 100%;

    }
}

.namePokemon {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
}

.typePokemon {
    font-style: oblique;
}

.cards {
    width: 12%;
    height: 420px;

}
</style>