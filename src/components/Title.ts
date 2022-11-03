import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const tagName: string = 'title-blog';

@customElement(tagName)
export class TitleBlog extends LitElement {
	@property({ type: String }) name = 'Dblog';

	static styles = css`
		.container {
			position: relative;
			overflow: hidden;
		}

		.container__title {
			font-size: 320px;
			font-family: 'Raleway-bold';
			font-weight: bold;
			margin: 0;
			padding: 2rem 0;
			text-transform: uppercase;
			position: relative;
			animation: shadow-title 2s ease-in-out;
			animation-delay: 0.3ms;
		}

		.container__title::after {
			content: '';
			width: 100%;
			height: 4px;
			position: absolute;
			top: 0;
			left: 0;
			background-color: var(--white--color);
		}

		.container__title::before {
			content: '';
			width: 100%;
			height: 4px;
			bottom: 0;
			left: 0;
			position: absolute;
			background-color: var(--white--color);
		}
		.title-bloop {
			position: absolute;
			top: 0;
			right: -50%;
		}

		@keyframes shadow-title {
			0% {
				text-shadow: 0 0 5px var(--white--color);
			}
			100% {
				text-shadow: 0 0 0 var(--white--color);
			}
		}
	`;

	render(): TemplateResult<1> {
		return html`
			<div class="container">
				<h1 class="container__title">${this.name}</h1>
			</div>
		`;
	}
}
