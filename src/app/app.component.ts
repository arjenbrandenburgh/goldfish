import { Component, OnInit } from '@angular/core';
import { Configuration } from './app.constants';

import { DragulaService } from 'ng2-dragula';

import { Card, Deck } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {'(window:keydown)': 'hotkeys($event)'},
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    deckObject = {"id":141903,"name":"Tin Fins","date":1503957600000,"mainboard":[{"quantity":1,"card":{"name":"Emrakul, the Aeons Torn","card_type":"Creature","lowest_print":{"id":20736,"latest_price":{"date":1505111463000,"low":0.0,"avg":36.65,"high":0.0,"foil":36.65},"latest_price_ck":null,"image":"https://static.mtgstocks.com/cardimages/t38377.jpg"},"cmc":15,"color":"C"}},{"quantity":2,"card":{"name":"Children of Korlis","card_type":"Creature","lowest_print":{"id":3831,"latest_price":{"date":1505109997000,"low":0.09,"avg":0.24,"high":0.99,"foil":5.69},"latest_price_ck":0.29,"image":"https://static.mtgstocks.com/cardimages/110525.jpg"},"cmc":1,"color":"W"}},{"quantity":2,"card":{"name":"Griselbrand","card_type":"Creature","lowest_print":{"id":33413,"latest_price":{"date":1505111376000,"low":4.3,"avg":6.78,"high":10.49,"foil":14.99},"latest_price_ck":7.99,"image":"https://static.mtgstocks.com/cardimages/425897.jpg"},"cmc":8,"color":"B"}},{"quantity":4,"card":{"name":"Shallow Grave","card_type":"Instant","lowest_print":{"id":10436,"latest_price":{"date":1505110278000,"low":7.21,"avg":8.99,"high":19.0,"foil":null},"latest_price_ck":10.99,"image":"https://static.mtgstocks.com/cardimages/3310.jpg"},"cmc":2,"color":"B"}},{"quantity":1,"card":{"name":"Silence","card_type":"Instant","lowest_print":{"id":21295,"latest_price":{"date":1505111186000,"low":0.89,"avg":1.26,"high":3.21,"foil":2.46},"latest_price_ck":1.79,"image":"https://static.mtgstocks.com/cardimages/370578.jpg"},"cmc":1,"color":"W"}},{"quantity":3,"card":{"name":"Goryo's Vengeance","card_type":"Instant","lowest_print":{"id":5084,"latest_price":{"date":1505110166000,"low":37.79,"avg":47.22,"high":65.43,"foil":79.09},"latest_price_ck":49.99,"image":"https://static.mtgstocks.com/cardimages/74475.jpg"},"cmc":2,"color":"B"}},{"quantity":4,"card":{"name":"Brainstorm","card_type":"Instant","lowest_print":{"id":10835,"latest_price":{"date":1505110358000,"low":0.46,"avg":0.9,"high":3.55,"foil":null},"latest_price_ck":0.99,"image":"https://static.mtgstocks.com/cardimages/2497.jpg"},"cmc":1,"color":"U"}},{"quantity":4,"card":{"name":"Dark Ritual","card_type":"Instant","lowest_print":{"id":15511,"latest_price":{"date":1505110573000,"low":0.23,"avg":0.48,"high":2.0,"foil":null},"latest_price_ck":0.69,"image":"https://static.mtgstocks.com/cardimages/1149.jpg"},"cmc":1,"color":"B"}},{"quantity":4,"card":{"name":"Entomb","card_type":"Instant","lowest_print":{"id":30952,"latest_price":{"date":1505111300000,"low":9.0,"avg":11.99,"high":16.27,"foil":17.64},"latest_price_ck":15.99,"image":"https://static.mtgstocks.com/cardimages/413629.jpg"},"cmc":1,"color":"B"}},{"quantity":2,"card":{"name":"Thoughtseize","card_type":"Sorcery","lowest_print":{"id":21407,"latest_price":{"date":1505110882000,"low":13.25,"avg":20.54,"high":30.0,"foil":45.0},"latest_price_ck":22.99,"image":"https://static.mtgstocks.com/cardimages/373632.jpg"},"cmc":1,"color":"B"}},{"quantity":4,"card":{"name":"Ponder","card_type":"Sorcery","lowest_print":{"id":12378,"latest_price":{"date":1505111138000,"low":0.94,"avg":1.62,"high":3.11,"foil":18.85},"latest_price_ck":1.79,"image":"https://static.mtgstocks.com/cardimages/244313.jpg"},"cmc":1,"color":"U"}},{"quantity":4,"card":{"name":"Gitaxian Probe","card_type":"Sorcery","lowest_print":{"id":229,"latest_price":{"date":1505109961000,"low":0.57,"avg":1.85,"high":9.0,"foil":12.83},"latest_price_ck":1.79,"image":"https://static.mtgstocks.com/cardimages/233056.jpg"},"cmc":1,"color":"U"}},{"quantity":4,"card":{"name":"Cabal Therapy","card_type":"Sorcery","lowest_print":{"id":30965,"latest_price":{"date":1505111300000,"low":0.33,"avg":1.95,"high":6.48,"foil":4.69},"latest_price_ck":1.79,"image":"https://static.mtgstocks.com/cardimages/413625.jpg"},"cmc":1,"color":"B"}},{"quantity":1,"card":{"name":"Tendrils of Agony","card_type":"Sorcery","lowest_print":{"id":6240,"latest_price":{"date":1505110191000,"low":0.77,"avg":2.08,"high":3.0,"foil":19.99},"latest_price_ck":2.29,"image":"https://static.mtgstocks.com/cardimages/45842.jpg"},"cmc":4,"color":"B"}},{"quantity":1,"card":{"name":"Reanimate","card_type":"Sorcery","lowest_print":{"id":18428,"latest_price":{"date":1505110753000,"low":14.5,"avg":17.87,"high":22.55,"foil":null},"latest_price_ck":22.99,"image":"https://static.mtgstocks.com/cardimages/220576.jpg"},"cmc":1,"color":"B"}},{"quantity":2,"card":{"name":"Chrome Mox","card_type":"Artifact","lowest_print":{"id":30932,"latest_price":{"date":1505111300000,"low":13.87,"avg":15.33,"high":19.0,"foil":25.89},"latest_price_ck":18.99,"image":"https://static.mtgstocks.com/cardimages/413761.jpg"},"cmc":0,"color":"C"}},{"quantity":4,"card":{"name":"Lotus Petal","card_type":"Artifact","lowest_print":{"id":9669,"latest_price":{"date":1505110314000,"low":4.25,"avg":7.01,"high":92.01,"foil":null},"latest_price_ck":8.49,"image":"https://static.mtgstocks.com/cardimages/4614.jpg"},"cmc":0,"color":"C"}},{"quantity":1,"card":{"name":"Swamp","card_type":"Land","lowest_print":{"id":35103,"latest_price":{"date":1505111394000,"low":0.01,"avg":0.1,"high":0.49,"foil":0.75},"latest_price_ck":null,"image":"https://static.mtgstocks.com/cardimages/430884.jpg"},"cmc":0,"color":"C"}},{"quantity":1,"card":{"name":"Tundra","card_type":"Land","lowest_print":{"id":15717,"latest_price":{"date":1505110573000,"low":160.0,"avg":205.0,"high":287.99,"foil":null},"latest_price_ck":229.99,"image":"https://static.mtgstocks.com/cardimages/1383.jpg"},"cmc":0,"color":"C"}},{"quantity":2,"card":{"name":"Flooded Strand","card_type":"Land","lowest_print":{"id":25599,"latest_price":{"date":1505110941000,"low":11.99,"avg":15.33,"high":25.69,"foil":47.79},"latest_price_ck":17.99,"image":"https://static.mtgstocks.com/cardimages/386537.jpg"},"cmc":0,"color":"C"}},{"quantity":2,"card":{"name":"Marsh Flats","card_type":"Land","lowest_print":{"id":33395,"latest_price":{"date":1505111378000,"low":22.99,"avg":29.46,"high":39.99,"foil":40.53},"latest_price_ck":34.99,"image":"https://static.mtgstocks.com/cardimages/426064.jpg"},"cmc":0,"color":"C"}},{"quantity":4,"card":{"name":"Polluted Delta","card_type":"Land","lowest_print":{"id":25614,"latest_price":{"date":1505110945000,"low":12.43,"avg":18.25,"high":49.99,"foil":55.36},"latest_price_ck":19.99,"image":"https://static.mtgstocks.com/cardimages/386627.jpg"},"cmc":0,"color":"C"}},{"quantity":2,"card":{"name":"Underground Sea","card_type":"Land","lowest_print":{"id":15719,"latest_price":{"date":1505110562000,"low":345.0,"avg":424.16,"high":508.66,"foil":null},"latest_price_ck":459.99,"image":"https://static.mtgstocks.com/cardimages/1384.jpg"},"cmc":0,"color":"C"}},{"quantity":1,"card":{"name":"Scrubland","card_type":"Land","lowest_print":{"id":15678,"latest_price":{"date":1505110569000,"low":77.98,"avg":85.03,"high":135.0,"foil":null},"latest_price_ck":109.99,"image":"https://static.mtgstocks.com/cardimages/1380.jpg"},"cmc":0,"color":"C"}}],"sideboard":[{"quantity":2,"card":{"name":"Pull from Eternity","card_type":"Instant","lowest_print":{"id":3983,"latest_price":{"date":1505110006000,"low":0.19,"avg":0.43,"high":1.03,"foil":6.4},"latest_price_ck":0.25,"image":"https://static.mtgstocks.com/cardimages/106657.jpg"},"cmc":1,"color":"W"}},{"quantity":1,"card":{"name":"Echoing Truth","card_type":"Instant","lowest_print":{"id":5710,"latest_price":{"date":1505110134000,"low":0.05,"avg":0.3,"high":1.5,"foil":3.15},"latest_price_ck":0.35,"image":"https://static.mtgstocks.com/cardimages/46162.jpg"},"cmc":2,"color":"U"}},{"quantity":2,"card":{"name":"Chain of Vapor","card_type":"Instant","lowest_print":{"id":32211,"latest_price":{"date":1505111364000,"low":0.69,"avg":0.87,"high":2.99,"foil":null},"latest_price_ck":0.99,"image":"https://static.mtgstocks.com/cardimages/420701.jpg"},"cmc":1,"color":"U"}},{"quantity":3,"card":{"name":"Surgical Extraction","card_type":"Instant","lowest_print":{"id":28263,"latest_price":{"date":1505111031000,"low":15.0,"avg":20.86,"high":29.99,"foil":30.12},"latest_price_ck":19.99,"image":"https://static.mtgstocks.com/cardimages/397706.jpg"},"cmc":1,"color":"B"}},{"quantity":2,"card":{"name":"Massacre","card_type":"Sorcery","lowest_print":{"id":8185,"latest_price":{"date":1505110211000,"low":0.36,"avg":0.62,"high":2.0,"foil":20.0},"latest_price_ck":0.59,"image":"https://static.mtgstocks.com/cardimages/21324.jpg"},"cmc":4,"color":"B"}},{"quantity":2,"card":{"name":"Silence","card_type":"Instant","lowest_print":{"id":21295,"latest_price":{"date":1505111186000,"low":0.89,"avg":1.26,"high":3.21,"foil":2.46},"latest_price_ck":1.79,"image":"https://static.mtgstocks.com/cardimages/370578.jpg"},"cmc":1,"color":"W"}},{"quantity":3,"card":{"name":"Pithing Needle","card_type":"Artifact","lowest_print":{"id":19779,"latest_price":{"date":1505109882000,"low":1.9,"avg":3.25,"high":88.73,"foil":9.05},"latest_price_ck":3.99,"image":"https://static.mtgstocks.com/cardimages/253581.jpg"},"cmc":1,"color":"C"}}],"tournament_id":null,"editable":null,"archetype":null,"format":{"id":1,"name":"Legacy"},"commander":null,"commander_partner":null};

    libraryZone = [];
    handZone = [];
    graveyardZone = [];
    exileZone = [];
    sideboardZone = [];
    battlefieldZone = [];

    lastNumberOfCardsInHand: number = 7;

    constructor(private readonly _configuration: Configuration,
                private _dragulaService: DragulaService) {
        _dragulaService.setOptions('first-bag', {
            removeOnSpill: false
        });

        _dragulaService.dropModel.subscribe((value) => {
          console.log(`drop: ${value[0]}`, value);
        });
    }

    ngOnInit() {
        for (let card of this.deckObject['mainboard']) {
            for (let i = 0; i < card['quantity']; i++) {
                this.libraryZone.push(card['card']);
            }
        }
        this._configuration.shuffle(this.libraryZone);

        this.drawHand();
    }

    public performAction(payload): any {
        switch (payload) {
           case 'draw': {
              this.drawCard();
              break;
           }
           case 'untap': {
              this.battlefieldZone.forEach(x => x['tapped'] = false);
              break;
           }
           case 'mulligan': {
               this.libraryZone = this.libraryZone.concat(this.handZone);
               this.handZone = [];
               this._configuration.shuffle(this.libraryZone);
               this.lastNumberOfCardsInHand = (this.lastNumberOfCardsInHand <= 0) ? 0 : this.lastNumberOfCardsInHand - 1;
               this.drawHand();
               break;
           }
           default: {
              break;
           }
        }
    }

    private hotkeys($event): any {
      const hotKey = $event.keyCode;
      if (hotKey === 68) { // 'd' for 'Draw'
        this.performAction('draw');
      }
    }

    public toggleTap(card): any {
        const tapped = card['tapped'] || false;
        card['tapped'] = !tapped;
    }

    public moveZone(card, source, target): any {
        const index = source.indexOf(card, 0);
        if (index > -1) {
            source.splice(index, 1);
            target.push(card);
        }
    }

    public drawHand(): any {
        for (let i = 0; i < this.lastNumberOfCardsInHand; i++){
            this.drawCard();
        }
    }

    public drawCard(): any {
        const newCard = this.libraryZone.pop();
        this.handZone.push(newCard);
    }
}
