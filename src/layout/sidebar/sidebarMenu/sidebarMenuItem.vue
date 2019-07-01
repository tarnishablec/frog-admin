<template>
	<div v-if="!route.hidden" class="sidebar-menu-item">
		<template v-if="!hasActiveChildren(route)">
			<router-link :to="fullPath">
				<el-menu-item :index="fullPath + (hasChildren(route) ?('/'+ route.children[0].path ): '')">
					<fr-icon class="side-menu-icon" v-if="hasIcon(route)" :icon="route.meta.icon"/>
					<span slot="title">{{hasSideName(route)?route.meta.sideName:route.name}}</span>
				</el-menu-item>
			</router-link>
		</template>
		<el-submenu v-else :index="fullPath" popper-append-to-body>
			<template slot="title">
				<fr-icon class="side-menu-icon" v-if="hasIcon(route)" :icon="route.meta.icon"/>
				<span>{{hasSideName(route)?route.meta.sideName:route.name}}</span>
			</template>
			<sidebar-menu-item v-for="child in route.children" :key="child.path" :route="child" :base-path="fullPath"
			                   class="nest-menu-item"/>
		</el-submenu>
	</div>
</template>

<script>
	import {hasActiveChildren, hasIcon, hasSideName, hasChildren} from '@/utils/routerUtils'

	export default {
		name: "sidebarMenuItem",
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
				return (this.basePath + '/' + this.route.path).replace(/^\/\//, '\/') ;
			},
		},
		methods: {
			hasActiveChildren,
			hasIcon,
			hasSideName,
			hasChildren
		}
	}
</script>

<style lang="scss" scoped>

</style>
