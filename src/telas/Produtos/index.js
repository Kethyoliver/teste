import React from "react";
import { FlatList, View} from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

export default function Produto({ topo, detalhes, itens}) {


  return <View style={{backgroundColor:'white'}}>
  <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.id}
        ListHeaderComponent={() => {
          
          return <>
              <Topo {...topo} />
              <Detalhes {...detalhes} />
            </>
        }}
    />
  </View>
}
