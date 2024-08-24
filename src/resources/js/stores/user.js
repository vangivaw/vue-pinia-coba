import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const user = ref ({
        name: "Matt",
        email: "matt@learnvue.co",

    });
    const website = computed(() => 
        user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
    );

    const changeName = (newName) => {
        user.value.name = newName;
    };

    return {
        user,
        website,
        changeName,
    };
})