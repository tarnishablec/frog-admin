<template>
	<div v-if="!route.hidden" class="sidebar-menu-item">
		<template v-if="!hasChildren">
			<router-link :to="fullPath">
				<el-menu-item :index="fullPath">
					<fr-icon v-if="hasIcon" :icon="route.meta.icon"/>
					<span>{{hasSideName?route.meta.sideName:route.name}}</span>
				</el-menu-item>
			</router-link>
		</template>
		<el-submenu v-else :index="fullPath">
			<template slot="title">
				<fr-icon v-if="hasIcon" :icon="route.meta.icon"/>
				<span>{{hasSideName?route.meta.sideName:route.name}}</span>
			</template>
			<sidebar-menu-item v-for="child in route.children" :route="child" :base-path="fullPath"/>
		</el-submenu>
	</div>
</template>

<script>
	import FrIcon from "@/components/frog-ui/frIcon/index";

	export default {
		name: "sidebarMenuItem",
		components: {FrIcon},
		props: {
			route: {
				type: Object,
				required: true
			},
			basePath: {
				type: String,
				default: ''
			},
		},
		computed: {
			fullPath() {
				return (this.basePath + '/' + this.route.path).replace(/^\/\//, '\/');
			},
			hasIcon() {
				return this.route.meta && this.route.meta.icon;
			},
			hasChildren() {
				return this.route.children && this.route.children.length > 0;
			},
			hasSideName() {
				return this.route.meta && this.route.meta.sideName;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sidebar-menu-item {
		span {
			margin-left: 20px;
		}
	}
</style>
