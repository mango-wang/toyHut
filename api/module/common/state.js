/**
 * Created by mango on 2016/4/8.
 */
module.exports = function () {

    var states =
        [
            'Alabama', '阿拉巴马州', 'AL', 'Montgomery', '蒙哥马利',
            'Alaska', '阿拉斯加州', 'AK', 'Juneau', '朱诺',
            'Arizona', '阿利桑那州', 'AZ', 'Phoenix', '菲尼克斯',
            'Arkansas', '阿肯色州', 'AR', 'Little rock', '小石城',
            'California', '加利福尼亚州', 'CA', 'Sacramento', '萨克拉门托',
            'Colorado', '科罗拉多州', 'CO', 'Denver', '丹佛',
            'Connecticut', '康涅狄格州', 'CT', 'Hartford', '哈特福德',
            'Delaware', '特拉华州', 'DE', 'Dover', '多佛',
            'Florida', '佛罗里达州', 'FL', 'Tallahassee', '塔拉哈西',
            'Georgia', '乔治亚州', 'GA', 'Atlanta', '亚特兰大',
            'Hawaii', '夏威夷州', 'HI', 'Honolulu', '檀香山',
            'Idaho', '爱达荷州', 'ID', 'Boise', '博伊西',
            'Illinois', '伊利诺斯州', 'IL', 'Springfield', '斯普林菲尔德',
            'Indiana', '印第安纳州', 'IN', 'Indianapolis', '印第安纳波利斯',
            'Iowa', '爱荷华州', 'IA', 'Des Moines', '得梅因',
            'Kansas', '堪萨斯州', 'KS', 'Topeka', '托皮卡',
            'Kentucky', '肯塔基州', 'KY', 'Frankfort', '法兰克福',
            'Louisiana', '路易斯安那州', 'LA', 'Baton Rouge', '巴吞鲁日',
            'Maine', '缅因州', 'ME', 'Augusta', '奥古斯塔',
            'Maryland', '马里兰州', 'MD', 'Annapolis', '安纳波利斯',
            'Massachusetts', '马萨诸塞州', 'MA', 'Boston', '波士顿',
            'Michigan', '密歇根州', 'MI', 'Lansing', '兰辛',
            'Minnesota', '明尼苏达州', 'MN', 'St. Paul', '圣保罗',
            'Mississippi', '密西西比州', 'MS', 'Jackson', '杰克逊',
            'Missouri', '密苏里州', 'MO', 'Jefferson City', '杰斐逊城',
            'Montana', '蒙大拿州', 'MT', 'Helena', '海伦娜',
            'Nebraska', '内布拉斯加州', 'NE', 'Lincoln', '林肯',
            'Nevada', '内华达州', 'NV', 'Carson City', '卡森城',
            'New hampshire', '新罕布什尔州', 'NH', 'Concord', '康科德',
            'New jersey', '新泽西州', 'NJ', 'Trenton', '特伦顿',
            'New mexico', '新墨西哥州', 'NM', 'Santa Fe', '圣菲',
            'New York', '纽约州', 'NY', 'Albany', '奥尔巴尼',
            'North Carolina', '北卡罗来纳州', 'NC', 'Raleigh', '纳罗利',
            'North Dakota', '北达科他州', 'ND', 'Bismarck', '俾斯麦',
            'Ohio', '俄亥俄州', 'OH', 'Columbus', '哥伦布',
            'Oklahoma', '俄克拉荷马州', 'OK', 'Oklahoma City', '俄克拉何马城',
            'Oregon', '俄勒冈州', 'OR', 'Salem', '塞勒姆',
            'Pennsylvania', '宾夕法尼亚州', 'PA', 'Harrisburg', '哈里斯堡',
            'Rhode island', '罗得岛州', 'RI', 'Providence', '普罗维登斯',
            'South carolina', '南卡罗来纳州', 'SC', 'Columbia', '哥伦比亚',
            'South dakota', '南达科他州', 'SD', 'Pierre', '皮尔',
            'Tennessee', '田纳西州', 'TN', 'Nashville', '纳什维尔',
            'Texas', '得克萨斯州', 'TX', 'Austin', '奥斯汀',
            'Utah', '犹他州', 'UT', 'Salt Lake City', '盐湖城',
            'Vermont', '佛蒙特州', 'VT', 'Montpelier', '蒙彼利埃',
            'Virginia', '弗吉尼亚州', 'VA', 'Richmond', '里士满',
            'Washington', '华盛顿州', 'WA', 'Olympia', '奥林匹亚',
            'West Virginia', '西弗吉尼亚州', 'WV', 'Charleston', '查尔斯顿',
            'Wisconsin', '威斯康辛州', 'WI', 'Madison', '麦迪逊',
            'Wyoming', '怀俄明州', 'WY', 'Cheyenne', '夏延'];
    var list = [];
    var j = 0;
    var obj = {};
    for (var i = 0; i < states.length; i++) {
        if (j == 5) {
            var data  = obj;

            j = 0;
            list.push(data);
            obj ={};
        }
        switch (j) {
            case 0:
                obj.stateFullName = states[i];
                break
            case 1:
                obj.nickNameZh = states[i];
                break
            case 2:
                obj.acronym = states[i];
                break
            case 3:
                obj.capital = states[i];
                break
            case 4:
                obj.capitalNameZh = states[i];
                break

        }
        j++;
    }
    return list
}

