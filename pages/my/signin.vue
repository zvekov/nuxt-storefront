<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="px-3 pb-2 grid md:grid-cols-2">
      <div class="">
        <h1 class="text-2xl font-bold leading-snug">Signin</h1>
      </div>
    </div>
    <div v-show="error !== ''" class="p-3 border">
      <p>{{ error }}</p>
    </div>
    <form class="md:w-1/2 px-3 pt-3" @submit="loginUser">
      <div class="group">
        <input
          v-model="identifier"
          class="dark:border-opacity-50 dark:border-white"
          type="email"
          required
        />
        <label>Email</label>
      </div>
      <div class="group">
        <input
          v-model="password"
          class="dark:border-opacity-50 dark:border-white"
          type="password"
          required
        />
        <label>Password</label>
      </div>
      <div>
        <button
          :disabled="identifier === '' || password === ''"
          class="
            bg-black bg-opacity-80
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-opacity-70
            transition-all
            duration-200
          "
          type="submit"
        >
          Signin
        </button>
        <span class="px-3">
          or <nuxt-link to="/signup/">signup</nuxt-link>
        </span>
      </div>
    </form>
  </div>
</template>
<script>
import vSelect from 'vue-select'
export default {
  name: 'SigninPage',
  components: {
    vSelect,
  },
  middleware: 'authenticated',
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        console.log(user)
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/my/')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
      }
    },
  },
}
</script>

<style lang="postcss">
.group {
  @apply relative mb-4;

  & .vs__dropdown-toggle {
    @apply border-2 rounded-lg w-full;
  }

  & input {
    @apply border-2 rounded-lg p-3 w-full;
    &:focus {
      @apply outline-none border-black border-opacity-80;
    }
  }

  & label {
    @apply absolute transition-all duration-200;
    left: 1rem;
    top: 0.9rem;
    color: #999;
    pointer-events: none;
  }
}
.vs--open input ~ label,
input:focus ~ label,
input:valid ~ label {
  @apply bg-white px-1 -ml-1 text-code text-black text-opacity-80;
  top: -0.65rem;
}
html.dark input:focus ~ label,
html.dark input:valid ~ label,
html.dark input,
html.dark input::-webkit-contacts-auto-fill-button {
  background: #1a1a1a;
}

/* Change Autocomplete styles in Chrome*/
html.dark input:-webkit-autofill,
html.dark input:-webkit-autofill:hover,
html.dark input:-webkit-autofill:focus,
html.dark textarea:-webkit-autofill,
html.dark textarea:-webkit-autofill:hover,
html.dark textarea:-webkit-autofill:focus,
html.dark select:-webkit-autofill,
html.dark select:-webkit-autofill:hover,
html.dark select:-webkit-autofill:focus {
  background: #1a1a1a;
}
</style>
