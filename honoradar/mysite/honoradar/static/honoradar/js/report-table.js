new Vue({
	el: "#ranking",
	data: {
		medias: [],
		orderBy: "position",
		orderOption: "asc",
		searchQuery: ""
	},
	mounted() {
		fetch("../../../static/honoradar/data-2018.json")
			.then(response => response.json())
			.then(json => {
				this.medias = json.standing;
			});
	},
	methods: {
		sort: function(by, option) {
			if (this.orderBy == by) {
				if (this.orderOption == "asc") {
					this.orderOption = "desc";
				} else if (this.orderOption == "desc") {
					this.orderOption = "asc";
				}
			} else {
				this.orderOption = option;
				this.orderBy = by;
			}
		}
	},
	computed: {
		filteredBySearch: function() {
			let self = this;
			return this.sortedmedias.filter(
				media =>
					media.name
						.toLowerCase()
						.indexOf(self.searchQuery.toLowerCase()) !== -1
			);
		},
		sortedmedias: function() {
			return _.orderBy(this.medias, this.orderBy, this.orderOption);
		}
	}
})
