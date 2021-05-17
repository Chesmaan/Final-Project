<template>
    <div>
        <div id="products">
            <h2>Products</h2>
            <hr>

            <table>
                <tr>
                    <th colspan="3"><br><br>TOP SELLER<br><br></th>
                </tr>
                <tr>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img id="for_us" src="../assets/1_FB_FOR_US.jpg"  alt="FB FOR US">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/2_FB_BLM.jpg" alt="FUBU BLM">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/3_FB_SKETCH_REDWHITE.jpg" alt="FB SKETCH RED/WHITE">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td class="button"><router-link to="/create" class="button">FB FOR US <br> $34.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">FUBU BLM <br> $34.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">FB Sketch Red/White <br> $34.99</router-link></td>
                </tr>
                <tr>
                    <th colspan="3"><br><br><br>LATEST PRODUCTS<br><br></th>
                </tr>
                <tr>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/4_FB_SKETCH_ROYAL_BLUE.jpg" alt="FB SKETCH ROYAL BLUE">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/5_FB_MLLH.jpg" alt="FB MLLH">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/6_FB_SKETCH_GOLDPURPLE.jpg" alt="FB SKETCH GOLD/PURPLE">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td class="button"><router-link to="/create" class="button">FB Sketch Royal Blue <br> $34.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">FB MLLH <br> $34.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">FB Sketch Gold/Purple <br> $34.99</router-link></td>
                </tr>
                <tr>
                    <th colspan="3"><br><br><br>SPORTS<br><br></th>
                </tr>
                <tr>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/7_FB_SPORT_TEE.jpg" alt="MNFB SPORT TEE">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/8_FB_BLACK_BASEBALL_JERSEY.jpg" alt="MNFB BLACK BASEBALL JERSEY">
                        </router-link>
                    </td>
                    <td class="zoom">
                        <router-link to="/create" class="zoom">
                            <img src="../assets/9_FB_WHITE_BASEBALL_JERSEY.jpg" alt="MNFB WHITE BASEBALL JERSEY">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td class="button"><router-link to="/create" class="button">MNFB Sport Tee <br> $34.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">MNFB Black Baseball Jersey <br> $129.99</router-link></td>
                    <td class="button"><router-link to="/create" class="button">MNFB White Baseball Jersey <br> $129.99</router-link></td>
                </tr>
            </table>
        </div>

            <br><br><br><br><br>
        
        <footer>
            <h6>© 2021 FUBU COLLECTION | DZN BY BRYAN</h6>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>