type IfeTypeProps = import('@jswork/react-if-else').ReactIfElseProps;
type RcmTypeProps = import('@jswork/react-condition-manager').ReactConditionManagerProps;
type RsmTypeProps = import('@jswork/react-status-manager').ReactStatusManagerProps;
type ListTypeProps = import('@jswork/react-list').ReactListProps;

interface NxStatic {
  $rc: {
    ife: React.ComponentType<IfeTypeProps>;
    rcm: React.ComponentType<RcmTypeProps>;
    rsm: React.ComponentType<RsmTypeProps>;
    list: React.ComponentType<ListTypeProps>;
  };
}
