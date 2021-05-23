<!-- TODO: Create separate reusable Tab component  -->
<template>
  <div class="tabs">
    <ul>
      <li v-for="(tab, index) in tabs" :key="tab.id">
        <span
          class="tab"
          :class="{ active: selectedIndex === index }"
          tabIndex="0"
          role="tab"
          :aria-selected="selectedIndex === index"
          :aria-label="tab.city"
          @click="(e) => onTabClick(e, index)"
        >
          {{ tab.city }}
        </span>
      </li>
    </ul>
    <div class="add-tab-wrapper">
      <select class="tab-options">
        <option
          v-for="option in selections"
          :key="option.open_weather_id"
          :value="option.open_weather_id"
        >
          {{ option.city }}
        </option>
      </select>
      <button aria-label="Add City" @click="onAddTabClick">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      },
    },
    selectedIndex: {
      type: Number,
      default: -1,
    },
    selections: {
      type: Array,
      default: () => {
        return []
      },
    },
    onTabClick: {
      type: Function,
      default: () => {},
    },
    onAddTabClick: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style>
.tabs {
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tabs ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tabs ul > li {
  float: left;
}

.tab {
  position: relative;
  margin-right: 32px;
  padding: 0 8px;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.5;
}

.tab::before {
  content: '';
  position: absolute;
  background-color: rgba(0, 0, 0, 5%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
}

.tab:hover::before {
  opacity: 1;
}

.tab.active {
  text-decoration: underline;
  text-underline-position: under;
}

.add-tab-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
