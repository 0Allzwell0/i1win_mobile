<template>
	<div class="modal fade" id="modalMessage" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="msg-modal modal-dialog" role="document">
			<fa class="modal-close" data-dismiss="modal" :icon="['fas', 'times']" />
			<ul class="msg-list"></ul>
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss">
	.msg-modal {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		background: $color-white;
		box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.5);
		margin: 35vh 14% 0 14%;
		padding: 40px 10px 10px 10px;

		.modal-close {
			position: absolute;
			right: 15px;
			top: 10px;
			color: $color-black;
			font-size: 20px;
		}

		> ul {
			font-family: $font-family;
			font-size: 14px;

			> li {
				list-style-type: decimal;
				padding: 5px 0;
				margin-left: 15px;
			}
		}
	}
</style>