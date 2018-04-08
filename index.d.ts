declare module 'swallowify' {
  type EventfulFunction<A> = (event: Event) => A
	function swallowify<A>(eventfulFunction: EventfulFunction<A>): EventfulFunction<A>;
	export = swallowify;
}
