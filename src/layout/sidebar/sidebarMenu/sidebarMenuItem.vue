<template>
	<div v-if="!route.hidden" class="sidebar-menu-item">
		<template v-if="!hasChildren(route)">
			<router-link :to="fullPath">
				<el-menu-item :index="fullPath">
					<fr-icon class="side-menu-icon" v-if="hasIcon" :icon="route.meta.icon"/>
					<span slot="title">{{hasSideName?route.meta.sideName:route.name}}</span>
				</el-menu-item>
			</router-link>
		</template>
		<el-submenu v-else :index="fullPath">
			<template slot="title">
				<fr-icon class="side-menu-icon" v-if="hasIcon" :icon="route.meta.icon"/>
				<span>{{hasSideName?route.meta.sideName:route.name}}</span>
			</template>
			<sidebar-menu-item v-for="child in route.children" :key="fullPath" :route="child" :base-path="fullPath"
												 class="nest-menu-item"/>
		</el-submenu>
	</div>
</template>

<script>
	import FrIcon from "@/components/frog-ui/frIcon/index";
	import {hasChildren, hasIcon, hasSideName} from '@/utils/routerUtils'

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
		},
		methods: {
			hasSideName,
			hasIcon,
			hasChildren
		}
	}
</script>

<style lang="scss" scoped>

	.sidebar-menu-item {
		transition: border 0.3s;

		.side-menu-icon {
			margin-right: 25px;
		}

		&:hover:not(.nest-menu-item) {
			border-left: red;
			border-width: 0 0 0 2px;
			border-style: solid;
		}

		.el-submenu__title {
			span {
				&::after {
					content: '+';
					float: right;
				}
			}
		}
	}
</style>
