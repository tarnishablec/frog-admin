import Vue from 'vue'
import en from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(en);

import {
	Button,
	Menu,
	Submenu,
	MenuItem,
	Tooltip,
	Loading,
	MessageBox,
	Message,
	Notification,
	Table,
	TableColumn,
	RadioGroup,
	Radio,
	Pagination,
	Input,
	Card,
	DatePicker,
	TimePicker,
	Select,
	Option,
	Dialog,
	Scrollbar
} from 'element-ui'

Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Tooltip);
Vue.use(Loading.directive);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Pagination);
Vue.use(Scrollbar);
Vue.use(Input);
Vue.use(Card);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);


Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
