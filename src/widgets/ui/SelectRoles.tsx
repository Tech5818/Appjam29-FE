import { SelectRole } from '@entities/ui/SelectRole';
import { Typography, VStack } from '@shared/ui';
import { GuardianIcon } from '@shared/ui/GuardianIcon';
import { WandIcon } from '@shared/ui/WandIcon';

export const SelectRolesWidget = () => {
  return (
    <>
      <VStack $gap={'15px'} $alignItems="center">
        <VStack $alignItems="center">
          <Typography size="Title1" weight={'bold'}>
            보호자와 피보호자를
          </Typography>
          <Typography size="Title1" weight={'bold'}>
            선택해주세요
          </Typography>
        </VStack>
        <VStack $gap={'10px'}>
          <SelectRole role="guardian" color="blue">
            <GuardianIcon />
          </SelectRole>
          <SelectRole role="wand" color="green">
            <WandIcon />
          </SelectRole>
        </VStack>
      </VStack>
    </>
  );
};
