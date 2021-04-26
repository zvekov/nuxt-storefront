<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="px-3 pb-4 grid md:grid-cols-2">
      <div class="">
        <h1 class="text-2xl font-bold leading-snug">Sign Up</h1>
      </div>
    </div>
    <form class="md:w-1/2 px-3">
      <div class="group">
        <input
          class="dark:border-opacity-50 dark:border-white"
          type="text"
          required
        />
        <label>First Name</label>
      </div>

      <div class="group">
        <input
          class="dark:border-opacity-50 dark:border-white"
          type="text"
          required
        />
        <label>Last Name</label>
      </div>
      <div class="group">
        <input
          class="dark:border-opacity-50 dark:border-white"
          type="text"
          required
        />
        <label>Email</label>
      </div>
      <div class="group">
        <input
          class="dark:border-opacity-50 dark:border-white"
          type="tel"
          required
        />
        <label>Phone</label>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignupPage',
}
</script>

<style lang="postcss">
.group {
  @apply relative mb-4;

  & input {
    @apply border-2 rounded-lg p-3 w-full;
    &:focus {
      @apply outline-none border-green-700;
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
input:focus ~ label,
input:valid ~ label {
  @apply bg-white px-1 -ml-1 text-code text-green-700;
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