<script setup>
    //import ref and onMounted
    import { ref, onMounted } from 'vue';
    import { useUserStore } from '../../resources/js/stores/user';

    //import api
    import Api from '../../api';

    //define state
    const posts = ref([]);

    const store = useUserStore();
    const nameInput = ref("");

    // store.user.name
    // store.user.email = 'Matt@learnvue.co'
    // store.website
    // store.changeName('Matthew')
    const handleSubmit = () => {
        store.changeName(nameInput.value);
        nameInput.value = "";
    }

    //method fetchDataPosts
    const fetchDataPosts = async () => {

        //fetch data 
        await Api.get('/wg')

        .then(response => {

            //set response data to state "posts"
            posts.value = response.data.data.data

        });
    }

    //run hook "onMounted"
    onMounted(() => {

        //call method "fetchDataPosts"
        fetchDataPosts();
    });
</script>

<template>
    <div style="margin: 0 5px; padding: 2px 16px;" class="card">
        <p>HALAMAN POSTS INDEX</p>
        <p></p>
        <small>Made by <b>{{ store.user.name }}</b></small>
        <br>
        <small>Email is {{ store.user.email }}</small>
        <br>
        <small>Website is {{ store.website }}</small>
        <br>
        <input type="text" placeholder="new Name" v-model="nameInput">
        <button @click="handleSubmit">change Name</button>
        <p></p>
        <router-link :to="{ name: 'posts.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</router-link>
        <table style=" border: 1px;">
            <thead class="bg-dark text-white">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col" style="width:15%">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="posts.length == 0">
                    <td colspan="4" class="text-center">
                        <div class="alert alert-danger mb-0">
                            Not added anything yet!
                        </div>
                    </td>
                </tr>
                <tr v-else v-for="(post, index) in posts" :key="index">
                    <td class="text-center">
                        <img :src="post.image" width="200" class="rounded-3"/>
                    </td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                    <td class="text-center">
                        <router-link :to="{ name: 'posts.edit', params:{id: post.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                        <button class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>