<template>
  <div @click="share()">
    <slot v-if="hasSlot()" name="clickable"> </slot>
    <icon-share class="w-4 h-4 dark:opacity-90" />
  </div>
</template>

<script>
import IconShare from '~/assets/icons/share.svg?inline'
export default {
  components: {
    IconShare,
  },
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
    url: {
      type: String,
      required: true,
    },
    onError: { type: Function, default: () => {} },
    onSuccess: { type: Function, default: () => {} },
  },
  methods: {
    hasSlot() {
      return !!this.$slots.clickable
    },
    share() {
      const data = {
        title: this.title,
        text: this.text,
        url: this.url,
      }
      if (navigator.share) {
        navigator
          .share(data)
          .then((succ) => {
            if (succ) {
              this.onSuccess(succ)
            }
          })
          .catch((err) => {
            if (onError) {
              this.onError(err)
            }
          })
      } else if (this.onError) {
        this.onError('method not supported')
      }
    },
  },
}
</script>
