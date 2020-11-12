import React from "react";

function QuoteCard(props) {
	return (
		<div>
			<figure class="QuoteCard">
				<img src={props.image} />
				<figcaption>
					<blockquote>{props.quote}</blockquote>
					<cite>{props.character}</cite>
				</figcaption>
			</figure>
		</div>
	);
}

export default QuoteCard;
