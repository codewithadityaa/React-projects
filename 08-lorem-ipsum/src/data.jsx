const text = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
  I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
    `Cupcake ipsum dolor sit amet gingerbread donut sugar plum sugar plum gummi bears cheesecake jelly-o. Bonbon ice cream sweet roll ice cream caramels chocolate bar macaroon. Lollipop biscuit marshmallow toffee chupa chups cotton candy. Tart brownie wafer jelly-o lemon drops biscuit sesame snaps soufflé.`,

`Chicharrones gluten-free plaid, tousled leggings keytar cold-pressed kombucha tacos asymmetrical pabst craft beer ugh. Echo park mlkshk green juice letterpress four loko, truffaut deep v gochujang meggings gentrify microdosing. Vape chambray pug, lomo flannel literally helvetica hoodie hella jianbing mustache.`,

`Tofu leggings pour-over, letterpress tattooed deep v four dollar toast pop-up. Flannel hella single-origin coffee VHS, keytar celiac put a bird on it williamsburg kinfolk scenester snackwave sustainable. Literally twee stumptown, you probably haven't heard of them snackwave 90's. Fixie lumbersexual pabst ethical chartreuse, kale chips pour-over.`,

`Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.`,

`Macaroon jujubes sweet roll bear claw cheesecake. Tiramisu chocolate bar candy canes muffin. Tootsie roll macaroon halvah cake. Jelly-o wafer candy canes danish muffin.`,

`Hoodie fanny pack banjo, hella bitters flannel celiac. Green juice single-origin coffee kombucha PBR&B, marfa readymade neutra helvetica.`,

`Catnip meow purr as loud as possible catnip kitty power cat eats firefighters' slippers. Knock everything off the table sleep on keyboard sleep on dog bed. Meow i hate cucumber pls dont throw it at me.`,

`Artisan food truck lo-fi, poke retro leggings banjo bespoke marfa pour-over try-hard. Biodiesel four loko kitsch, slow-carb flexitarian hella venmo typewriter skateboard.`,

`Vinyl DIY irony keffiyeh, beard poutine sriracha skateboard cold-pressed flexitarian. Farm-to-table ennui before they sold out glossier, pickled pok pok snackwave palo santo. Art party chillwave twee health goth, selvage activated charcoal cronut. Lomo chia hella occupy.`,

`Oat cake marzipan marshmallow jelly beans cotton candy biscuit. Soufflé gingerbread brownie icing chocolate cake macaroon. Tiramisu lollipop jelly beans tart chocolate bar candy canes chocolate bar.`,

`Tumeric squid man braid, blog pitchfork leggings offal. Semiotics knausgaard vaporware twee four dollar toast artisan.`

`Vegan meditation taxidermy, PBR&B tattooed celiac flannel slow-carb scenester. Tumblr bushwick polaroid, glossier listicle XOXO man braid chillwave meggings.`

`Cupcake danish brownie jujubes biscuit sweet roll lemon drops. Marshmallow tiramisu lollipop marshmallow sweet roll candy canes.`

`Fixie put a bird on it viral, retro health goth occupy four loko stumptown thundercats whatever glossier shabby chic.`

`Carrot cake macaroon tiramisu chocolate bar candy carrot cake jelly sweet roll. Gummies croissant macaroon dessert chocolate bar icing sweet roll.`

`Gluten-free farm-to-table slow-carb distillery, vaporware PBR&B cray plaid chambray.`

`Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego.`

`Waistcoat schlitz meh shaman green juice. Flannel shoreditch plaid fixie four dollar toast hella, mixtape butcher skateboard.`

`Mustache man braid trust fund, blog forage single-origin coffee af. Plaid etsy actually shabby chic crucifix craft beer.`

`Pabst banh mi listicle, mumblecore church-key sustainable vice actually helvetica tousled.`
];
export default text;
