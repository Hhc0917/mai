<template>
    <div id="login" class="wrapper">
        <div class="content">
            <h3>手机号登录</h3>
            <div class="list flex flex-s">
                <label for="userName" class="border-item flex">
                    <i class="iconfont icon-shoujihao"></i>
                    <input type="text" name="userName" v-model="mobile" placeholder='手机号' id="userName">
                </label>
                <label for="code" class="border-item flex">
                    <i class="iconfont icon-yanzhengma"></i>
                    <input type="number" name="userName" v-model="code" placeholder='短信验证码' id="code">
                    <div v-if="cutdown === '获取验证码'" class="get-code" @click="getCode">{{cutdown}}</div>
                    <div v-else class="get-code get-code-gray">{{cutdown}}</div>
                </label>
            </div>
            <div class="button">
                <button type="button" name="button" class="login" @click="login">登录</button>
            </div>
            <div class="flex fu">
                <div class="item flex flex-sc">
                    <img v-if="!agree" src="../../assets/img/common/choice_1.png" @click="agree = true" alt="">
                    <img v-if="agree" src="../../assets/img/common/choice_2.png" @click="agree = false" alt="">
                    <span class="agrement">我同意 <i @click="openServer" class="color2">《用户协议》</i> </span>
                </div>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="right"
            >
            <slot>
                <div class="server-txt">
                    <div class="sever-alert">
                        <mt-header fixed style="z-index:999999999" :title="'服务协议'">
                            <div slot="left">
                                <mt-button icon="back" @click="closeServer">返回</mt-button>
                            </div>
                        </mt-header>
                    </div>
                    <div class="server-main pd20 color666">
                        版本生效日期：2017年08月14日 <br>提示条款<br> 欢迎您签署本《有道茶坊商城平台服务协议》（下称“本协议”）并使用有道茶坊商城平台服务！<br> 本协议为《有道茶坊用户协议》修订版本，自本协议发布之日起，有道茶坊商城平台各处所称“有道茶坊用户协议”均指本协议。 各服务条款前所列索引关键词仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义及解释。为维护您自身权益，建议您仔细阅读各条款具体表述。 【审慎阅读】您在申请注册流程中点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以下划线标识，您应重点阅读。如您对协议有任何疑问，可向有道茶坊商城平台客服咨询。 【签约动作】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，并与有道茶坊商城达成一致，成为有道茶坊商城平台“用户”。阅读协议过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。 定义 有道茶坊商城平台：指有道茶坊商城网站及客户端。 有道茶坊商城平台服务：有道茶坊商城基于互联网，以包含有道茶坊商城平台网站、客户端等在内的各种形态（包括未来科技发展出现的新的服务形态）向您提供各项服务。 有道茶坊商城平台规则：包括在所有有道茶坊商城内已经发布及后续发布的全部规则、解读、公告等内容以及平台在帮派、论坛、帮助中心内发布的各类规则、实施细则、产品流程说明、公告等。 同一用户：使用统一身份认证信息或有道茶坊商城排查认定多个有道茶坊商城账户的实际控制人为同一人的，均视为同一用户。 协议范围 2.1签约主体 【平等主体】本协议由您与有道茶坊商城平台经营者共同缔结，本协议对您与有道茶坊商城经营者均具有合同效力。 【主体信息】有道茶坊商城经营者是指经营有道茶坊商城平台的各法律主体。本协议项下，有道茶坊商城平台可根据有道茶坊商城平台的业务调整而发生变更，变更后的有道茶坊商城平台经营者与您共同履行本协议并向您提供服务，有道茶坊商城平台经营者变更不会影响您本协议项下的权益。有道茶坊商城平台还有可能因为提供新的有道茶坊商城平台服务而新增，如您使用新增的有道茶坊商城平台服务的，视为您同意新增的有道茶坊商城平台经营者与您共同履行本协议。发生争议时，您可根据您具体使用的服务及对您权益产生影响的具体行为对象确定与您履约的主体及争议相对方。 2.2补充协议 由于互联网高速发展，您与有道茶坊商城签署的本协议列明的条款并不能完整罗列并覆盖您与有道茶坊商城所有权利义务，现有的约定也不能保证完全符合未来发展的需求。因此，有道茶坊商城平台法律声明及隐私权政策、有道茶坊商城平台规则均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用有道茶坊商城平台服务，视为您同意上述补充协议。 用户资格 3.1用户资格 您确认，在您开始注册程序使用有道茶坊商城平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。 3.2账户说明 【账户获得】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，您可获得有道茶坊商城平台账户并成为有道茶坊商城平台用户。 有道茶坊商城平台只允许每位用户使用一个有道茶坊商城平台账户。如有证据证明或有道茶坊商城平台有理由相信您存在不当注册或不当使用多个有道茶坊商城平台账户的情形，有道茶坊商城平台可采取冻结或关闭账户、取消订单、拒绝提供服务等措施，如给有道茶坊商城平台及相关方造成损失的，您还应承担赔偿责任。 【账户使用】您有权使用您设置或确认的有道茶坊商城用户名、手机号码（以下简称“账户名称”）及您设置的密码（账户名称及密码合称“账户”）登录有道茶坊商城平台。 由于您的有道茶坊商城账户关联您的个人信息及有道茶坊商城平台商业信息，您的有道茶坊商城账户仅限您本人使用。未经有道茶坊商城平台同意，您直接或间接授权第三方使用您有道茶坊商城账户或获取您账户项下信息的行为无效。如有道茶坊商城平台判断您有道茶坊商城账户的使用可能危及您的账户安全及/或有道茶坊商城平台信息安全的，有道茶坊商城平台可拒绝提供相应服务或终止本协议。 【账户转让】由于用户账户关联用户信用信息，您的账户不得以任何方式转让，否则有道茶坊商城平台有权追究您的违约责任，且由此产生的一切责任均由您承担。 【实名认证】作为有道茶坊商城平台经营者，为您更好地使用有道茶坊商城平台的各项服务，保障您的账户安全，有道茶坊商城可要求您按我国法律规定完成实名认证。 【不活跃账户回收】如您的账户同时符合以下条件，则有道茶坊商城可回收您的账户，您的账户将不能再登陆有道茶坊商城平台，相应服务同时终止： （一）未绑定通过实名认证的有道茶坊商城账户； （二）连续六个月未用于登陆有道茶坊商城平台，且无账户余额； （三）不存在未到期的有效业务。 3.3注册信息管理 3.3.1真实合法 【信息真实】在使用有道茶坊商城平台服务时，您应当按有道茶坊商城平台页面的提示准确完整地提供您的信息（包括您的姓名、联系电话等），以便有道茶坊商城平台与您联系。您了解并同意，您有义务保持您提供的信息的真实性及有效性。 【会员名合法性】您设置的有道茶坊商城账户名称不得违反国家法律法规及有道茶坊商城规则关于账户名称的管理规定，否则有道茶坊商城可回收您的有道茶坊商城账户名。有道茶坊商城账户名的回收不影响您以手机号登录有道茶坊商城平台并使用有道茶坊商城平台服务。 3.3.2更新维护 您应当及时更新您提供的信息，在法律有明确规定要求有道茶坊商城作为平台服务提供者必须对部分用户的信息进行核实的情况下，有道茶坊商城将依法不时地对您的信息进行检查核实，您应当配合提供最新、真实、完善、有效的信息。 如有道茶坊商城按您最后一次提供的信息与您联系未果、您未按有道茶坊商城的要求及时提供信息、您提供的信息存在明显不实或行政司法机关核实您提供的信息无效的，您将承担因您自身、他人及有道茶坊商城造成的全部损失与不利后果。有道茶坊商城可向您发出询问，并要求您进行重新认证，直至中止、终止对您提供部分或全部有道茶坊商城平台服务，有道茶坊商城对此不承担责任。 3.4账户安全规范 【账户安全保管义务】您的账户为您自行设置并由您保管，有道茶坊商城任何时候均不会主动要求您提供您的账户密码。因此，建议您务必保管好您的账户，并确保您在每个上网时段结束时退出登录并以正确步骤离开有道茶坊商城平台。 账户因您主动泄露或因您自身遭受他人攻击、诈骗等行为导致的损失及后果，有道茶坊商城并不承担责任，您应通过司法、行政等救济途径向侵权行为人追偿。 【账户行为责任自负】除有道茶坊商城存在过错外，您对应您账户项下的所有行为结果（包括但不限于在线签署各类协议、发布信息、购买商品及披露信息等）负责。 【日常维护须知】如发现任何未经授权使用您账户登录有道茶坊商城平台或其他可能导致您账户遭窃、遗失的情况，建议您立即通知有道茶坊商城。您理解有道茶坊商城对您的任何请求而采取的行动均需要合理时间，且有道茶坊商城应您的请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大，除有道茶坊商城存在法定过错外，有道茶坊商城不承担责任。 有道茶坊商城平台服务及规范 4.1【服务概况】您有权在有道茶坊商城平台上享受商品购买、争议处理等服务。 4.2商品的购买 【商品的购买】凡促销增值专区所售的商品均为促销商品，一经确认购买，非质量问题，均不支持退货，不予退货，如质量问题，顾客可要求换货，换货请提供有效证明商品质量问题，当您再有道茶坊商城平台购买商品时，请您务必仔细确认所购商品的品名、价格、数量、型号、规格、尺寸或服务的时间、内容、限制性要求等重要事项，并在下单时核实您的联系地址、电话、收货人地址等信息。如您填写的收货人非您本人，则该收货人的行为和意思表示产生的法律后果均由您承担。您的购买行为应当基于真实的消费需求，不得存在对商品实施恶意购买、恶意维权等扰乱有道茶坊商城平台正常交易秩序的行为。基于维护有道茶坊商城平台交易秩序及交易安全的需要，有道茶坊商城发现上述情形时可主动执行关闭相关交易订单等操作。 4.3费用 有道茶坊商城为有道茶坊商城平台向您提供的服务付出了大量的成本，除有道茶坊商城平台明示的收费业务外，有道茶坊商城向您提供的服务目前是免费的。如未来有道茶坊商城向您收取合理费用，有道茶坊商城会采取合理途径并以足够合理的期限提前通过法定程序并以本协议第八条约定的方式通知您，确保您有充分选择的权利。 4.4责任限制 【不可抗力及第三方原因】有道茶坊商城依照法律规定履行基础保障义务，但对于下述原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，有道茶坊商城并不承担相应的违约责任： 因自然灾害、罢工、暴乱、战争、政府行为、司法行政命令等不可抗力因素； 因电力供应故障、通讯网络故障等公共服务因素或第三方因素； 在有道茶坊商城已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。 用户信息的保护及授权 5.1个人信息保护 有道茶坊商城非常重视用户个人信息（即能够独立或与其他信息结合后识别用户身份信息）的保护，在您使用有道茶坊商城提供的服务时，您同意有道茶坊商城按照在有道茶坊商城平台上公布的隐私权政策收集、存储、使用、披露和保护您的个人信息。有道茶坊商城希望通过隐私权政策向您清楚地介绍有道茶坊商城对您个人信息的处理方式，因此有道茶坊商城建议您完整地阅读隐私权政策，以帮助您更好地保护隐私。 5.2非个人信息的保证与授权 【信息的发布】您声明并保证，您对您所发布的信息拥有相应、合法的权利。否则，有道茶坊商城可对您发布的信息依法或依本协议进行删除或屏蔽。 【禁止性信息】您应当确保您所发布的信息不包含以下内容： 违反国家法律规定禁止性规定的； 政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的； 欺诈、虚假、不准确或存在误导性的； 侵犯他人知识产权或涉及第三方商业秘密及其他专有权利的； 侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的； 存在可能破坏、篡改、删除、影响有道茶坊商城平台任何系统正常运行或未经授权秘密获取有道茶坊商城平台数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的； 其他违背社会公共利益或公共道德或依据相关有道茶坊商城平台协议、规则的规定不适合在有道茶坊商城平台上发布的。 【授权使用】为方便您使用微信、支付宝等其他相关服务，您授权有道茶坊商城将您在账户注册和使用有道茶坊商城平台服务过程中提供、形成的信息传递给微信、支付宝等其他相关服务提供者，或从微信、支付宝等其他相关服务提供者获取您在注册、使用相关服务期间提供、形成的信息。 用户违约及处理 发生如下情形之一的，视为您违约： 使用有道茶坊商城平台服务时违反有关法律法规规定的； 违反本协议或本协议补充协议（即本协议第2.2条）约定的。为适应电子商务发展和满足海量用户对高效优质服务的需求，您理解并同意，有道茶坊商城平台规则中约定违约认定的程序和标准。如：有道茶坊商城可依据您的用户数据与海量用户数据的关系来认定您是否构成违约；您有义务对您的数据异常现象进行充分举证和合理解释，否则将被认定为违约。 6.2违约处理措施 【信息处理】您在有道茶坊商城平台上发布的信息构成违约的，有道茶坊商城可根据相应规则立即对相应信息进行删除、屏蔽处理。 【行为限制】您在有道茶坊商城平台上实施的行为，或虽未在有道茶坊商城平台上实施但对有道茶坊商城平台及其用户产生影响的行为构成违约的，有道茶坊商城可依据相应规则对您执行限制参加营销活动、中止向您提供部分或全部服务、划扣违约金等处理措施。如您的行为构成根本违约的，有道茶坊商城可查封您的账户，终止向您提供服务。 【处理结果公示】有道茶坊商城可将对您上述违约行为处理措施信息以及其他经国家行政或司法机关生效法律文书确认的违法信息在平台上予以公示。 6.3赔偿责任 如您的行为使有道茶坊商城平台及/或其关联公司遭受损失（包括自身的直接经济损失、商誉损失及对外支付的赔偿金、和解款、律师费、诉讼费等间接经济损失），您应赔偿有道茶坊商城及/或其关联公司的上述全部损失。 如您的行为使得第三人遭受损失或您怠于履行调处决定、有道茶坊商城及/或其关联公司处于社会公共利益保护或消费者权益保护目的，可自您账户余额中划扣相应款项进行支付。如您的余额或保证金不足以支付相应款项的，您同意委托有道茶坊商城使用自有资金代您支付上述款项，您应当返还该部分费用并赔偿因此造成有道茶坊商城的全部损失。 您同意有道茶坊商城自您的账户中划扣相应款项支付上述赔款项。如您账户中的款项不足以支付上述赔偿款项的，有道茶坊商城及/或关联公司可直接抵减您在有道茶坊商城及/或其关联公司其他协议项下的权益，并可继续追偿。 6.4特别约定 【商业贿赂】如您向有道茶坊商城及/或其关联公司的雇员等提供实物、现金、现金等价物、劳务、旅游等价值明显超出正常商务洽谈范畴的利益，则可视为您存在商业贿赂行为。发生上述情形的，有道茶坊商城可立即终止与您的所有合作并向您收取违约金及/或赔偿金，该金额以有道茶坊商城因您的贿赂行为而遭受的经济损失和商誉损失行为作为计算依据。 【关联处理】如您因严重违约导致有道茶坊商城终止本协议时，出于维护平台秩序及保护消费者权益的目的，有道茶坊商城及/或其关联公司可对与您在其他协议项下的合作采取中止甚或终止协议措施，并以本协议第八条约定的方式通知您。 如有道茶坊商城与您签署的其他协议及有道茶坊商城及/或其关联公司与您签署的协议中明确约定了对您在本协议下合作进行管理处理的情形，则有道茶坊商城出于维护平台秩序及保护消费者权益的目的，可在收到指令时中止甚至终止协议，并以本协议第八条约定的方式通知您。 协议的变更 有道茶坊商城可根据国家法律法规变化及维护交易秩序、保护消费者权益需要，不时修改本协议、补充协议，变更后的协议、补充协议（下称“变更事项”）将通过法定程序并以本协议第八条约定的方式通知您。 如您不同意变更事项，您有权于变更事项确定的生效日前联系有道茶坊商城反馈意见。如反馈意见得以采纳，有道茶坊商城将斟酌调整变更事项。 如您对已生效的变更事项仍不同意的，您应当于变更事项确定的生效之日起停止使用有道茶坊商城平台服务，变更事项对您不产生效力；如您在变更事项生效后仍继续使用有道茶坊商城平台服务，则视为您同意已生效的变更事项。 通知 8.1有效联系方式 您在注册成为有道茶坊商城平台用户，并接受有道茶坊商城平台服务时，应该向有道茶坊商城提供真实有效的联系方式（包括您的联系电话、联系地址等），对于联系方式发生变更的，您有义务及时更新有关信息，并保持可被联系的状态。 有道茶坊商城将向您上述联系方式的其中之一或其中若干向您送达各类通知，而此类通知的内容可能对您的权利义务产生重大的有利或不利影响，请您务必及时关注。 你有权通过您注册时填写的手机号码获取您感兴趣的商品广告信息、促销优惠等商业性信息。 8.2通知的送达 有道茶坊商城通过上述联系方式向您发出通知，在发送成功后即视为送达；以纸质载体发出的书面通知，按照提供的联系地址交邮后的第五个自然日即视为送达。 对于在有道茶坊商城平台上因交易活动引起的任何纠纷，您同意司法机关（包括但不限于人民法院）可以通过手机短信等现代通讯方式或邮寄方式向您送达法律文书（包括但不限于诉讼文书）。您指定接收法律文书的手机号码等联系方式为您在有道茶坊商城平台注册、更新时提供的手机号码，司法机关向上述联系方式发出法律文书即视为送达。您指定的邮寄地址为您的法定联系地址或您提供的有效联系地址。 您同意司法机关可采取以上一种或多种送达方式向您发送法律文书，送达时间以上述送达方式中最先送达为准。 您同意上述送达方式适用于各个司法程序阶段。如进入诉讼程序的，包括但不限于一审、二审、再审、执行以及督促程序等。 您应当保证所提供的联系方式是准确、有效的，并进行实时更新。如果因提供的联系方式不确切，或不及时告知变更后的联系方式，使法律文书无法送达或未及时送达，由您自行承担由此可能产生的法律后果。 协议的终止 9.1终止的情形 【用户发起终止】您有权通过以下任一方式终止本协议： 在满足有道茶坊商城公示的账户注销条件时您通过网站自助服务注销您的账户； 变更事项生效前您停止使用并明示不愿接受变更事项的； 您明示不愿继续使用有道茶坊商城平台服务，且符合有道茶坊商城终止条件的。 【有道茶坊商城发起的终止】出现以下情况时，有道茶坊商城可以本协议第八条的所列的方式通知您终止本协议： 您违反本协议约定，有道茶坊商城依据违约条款终止本协议的； 您盗用他人账户、发布违禁信息、骗取他人财务、扰乱市场秩序、采取不正当手段牟利等行为，有道茶坊商城依据有道茶坊商城平台规则对您的账户予以查封的； 除上述情形外，因您多次违反有道茶坊商城平台规则相关规定且情节严重，微糖级商城可依据有道茶坊商城平台规则对您的账户予以查封的； 您的账户被有道茶坊商城依据本协议回收的； 其它应当终止服务的情况。 9.2协议终止后的处理 【用户信息披露】本协议终止后，除法律有明确规定外，有道茶坊商城无义务向您或您指定的第三方披露您账户中任何信息。 【有道茶坊商城权利】本协议终止后，有道茶坊商城仍享有下列权利： 继续保存您留存于有道茶坊商城平台的本协议第五条所列的各类信息； 对于您过往的违约行为，有道茶坊商城仍可依据本协议向您追究违约责任。 【交易处理】本协议终止后，对于您在本协议存续期间产生的交易订单，有道茶坊商城可决定是否关闭该等交易订单。如有道茶坊商城决定继续履行的，则您应当就该等交易订单继续履行本协议及交易订单的约定，并承担因此产生的任何损失或增加的任何费用。 法律适用、管辖与其他 【法律适用】本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。 【管辖】您因使用有道茶坊商城平台服务所产生及有道茶坊商城平台服务有关的争议，由有道茶坊商城与您协商解决。协商不成时，任何一方均可向被告所在地人民法院提起诉讼。 【可分性】本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。
                    </div>
                </div>
            </slot>
        </mt-popup>
    </div>
</template>
<script>
    import { Indicator } from 'mint-ui'; //引入mintUI  indicator组件
    import { md } from '@/assets/js/md5.js';
    export default {
        data() {
            return {
                mobile: '',
                pw: '',
                code: '',
                agree: true,
                cutdown: '获取验证码',
                popupVisible: false
            }
        },
        methods: {
            openServer() {
                this.popupVisible = true;
            },
            closeServer() {
                this.popupVisible = false;
            },
            getCode() {
                let that = this;
                if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobile))) {
                    this.Util.myAlert("手机号码格式不正确");
                } else {
                    Indicator.open();
                    this.api.postB({
                        url: 'customer/sendMsgValidateCode',
                        params: {
                            mobile: this.mobile
                        }
                    }).then(res => {
                        Indicator.close();
                        if (res.successed) {
                            this.Util.myAlert("发送成功");
                            let cutTime = 60;
                            that.cutdown = cutTime + "秒后重发";
                            var myTime = setInterval(function() {
                                cutTime--;
                                that.cutdown = cutTime + "秒后重发";
                                if (cutTime == 0) {
                                    clearInterval(myTime);
                                    that.cutdown = "获取验证码";
                                }
                            }, 1000);
                        }
                    })
                }
            },
            login() {
                console.log('mobile:', this.mobile, 'pw:', this.pw, 'code:', this.code, 'agree:', this.agree)
                if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobile))) {
                    this.Util.myAlert("手机号码格式不正确");
                } else if (this.code.length === 0) {
                    this.Util.myAlert("请输入验证码");
                } else if (!this.agree) {
                    this.Util.myAlert("请同意用户协议");
                } else {
                    Indicator.open();
                    this.api.postB({
                        url: 'customer/login',
                        params: {
                            mobile: this.mobile,
                            shareCode: this.User.getShareCode(),
                        },
                        headers: {
                            msgValidateCode: md.md5(this.code),
                        }
                    }).then(res => {
                        Indicator.close();
                        if (res.returnValue) {
                            this.Util.myAlert("登录成功！");
                            this.Storage.setItem('uf', res.returnValue);
                            let loginFrom = this.Storage.getItem('loginFrom');
                            if (loginFrom && loginFrom.indexOf('/login') < 0) {
                                this.Storage.removeItem('loginFrom')
                                this.$router.replace({
                                    path: loginFrom
                                })
                            } else {
                                this.$router.replace({
                                    name: 'home'
                                })
                            }
                        } else {
                            this.Util.myAlert(res.returnValue);
                        }
                    })
                };
            }
        },
        created() {
            console.log(this.User.getShareCode())
        },
        mounted() {

        }
    }
</script>
<style lang='scss' scoped>
    @import './login'
</style>