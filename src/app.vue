<template>
<img :src="getImage" />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '50'
    },
    name: {
      type: String,
    }
  },
  computed: {
    getImage: function() {
      return this.getDataURI(this.name, this.size)
    }
  },

  methods: {
    getDataURI: function(name, size) {

      name = name || '';
      size = size || 60;

      var colours = [
          "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9",
          "#8e44ad", "#2c3e50",
          "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b",
          "#bdc3c7", "#7f8c8d"
        ],

        nameSplit = String(name)
        .toUpperCase()
        .split(' '),
        charCodeSum = name
          .split('')
          .map((c) => {
            return c.charCodeAt(0)
          })
        .reduce((a, b) => a + b, 0)
        initials, charIndex, colourIndex, canvas, context, dataURI;

      if (nameSplit.length == 1) {
        initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
      } else {
        initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
      }

      if (window.devicePixelRatio) {
        size = (size * window.devicePixelRatio);
      }

      charIndex = (initials == '?' ? 72 : charCodeSum) - 64;
      colourIndex = charIndex % colours.length;
      canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      context = canvas.getContext("2d");

      context.fillStyle = colours[colourIndex];
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = Math.round(canvas.width / 2) + "px Arial";
      context.textAlign = "center";
      context.fillStyle = "#FFF";
      context.fillText(initials, size / 2, size / 1.5);

      dataURI = canvas.toDataURL();
      canvas = null;

      return dataURI;
    }
  }
}
</script>
