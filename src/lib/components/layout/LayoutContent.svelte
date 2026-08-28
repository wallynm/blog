<!--
  The single page container. Header, footer and every page use this same
  width so their left edges line up; the reading column inside an article is
  narrowed with `max-w-content`, not by changing this container.
-->
<div class="mx-auto w-full max-w-wide px-5 sm:px-8">
	<slot />
</div>
