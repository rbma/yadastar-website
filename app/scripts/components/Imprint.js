'use strict';


import React from 'react';
import { Link } from 'react-router';


const Imprint = React.createClass({

	_makeEmail: function(){
		return (
			<a id="email" href="mailto:info@yadastar.com">info@yadastar.com</a>
		);
	},

	render: function(){


		return (
			<section className="center">
				<div className="content">
					<div className="header-imprint">
						<Link to="/">Yadastar</Link>
					</div>
					<div className="wrapper-imprint">
						<div className="imprint-left">
							Imprint:
							<br />
							<br />
							<br />
							<br />
							Represented By:
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							Registered At:
							<br />
							<br />
							<br />
							<br />
							<br />
							Disclaimer:
							<br />
							<br />
							<br />
							<br />
						</div>
						<div className="imprint-right">
							<p>Yadastar GmbH
							<br />
							Boisseréestr. 9-11
							<br />
							50674 Köln, Germany
							<br />
							<br />
							Many Ameri
							<br />
							Torsten Schmidt
							<br />
							<br />
							T&nbsp;&nbsp;+49 221 355053-0
							<br />
							F&nbsp;&nbsp;+49 221 355053-50
							<br />
							{this._makeEmail()}
							<br />
							<br />
							Handelsregister Amtsgericht Köln
							<br />
							HRB 77307
							<br />
							VAT ID: DE 260423003
							<br />
							<br />
							<br />
							Haftung für Inhalte
							<br />
							<br />
							Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
							<br />
							<br />
							<br />
							Haftung für Links
							<br />
							<br />
							Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
							<br />
							<br />
							<br />
							Urheberrecht
							<br />
							<br />
							Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
							<br />
							<br />
							Quellen: Disclaimer von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

});

export default Imprint;