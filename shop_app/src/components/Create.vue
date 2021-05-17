<template>
    <div class="container" >
        <div class="card">
            <div class="card-header" style="background-color: grey;">
                <h3 >FUBU</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Size</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Quantity:</label>
                        <input type="text" class="form-control" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <br>
                        <input type="submit" class="btn btn-primary" value="Add"/>
                    </div>
                </form>               
            </div>
        </div>
    </div>
</template>


<script>
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>