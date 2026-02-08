import EmptyState from "./empty-state";

export default function ErrorEmptyState() {
	return (
		<EmptyState
			icon="x-octagon"
			title="Something went wrong"
			caption="Sorry, we can't process your request at the moment. Please try again later."
		/>
	);
}
