
'use client';
import type { TextFieldClientProps } from 'payload';

import { Button, FieldLabel, TextInput, useField, useForm, useFormFields } from '@payloadcms/ui';
import React, { useCallback, useEffect } from 'react';

import { formatSlug } from './Slug.hooks';
import './Slug.scss';

type SlugComponentProps = {
  checkboxFieldPath: string
  fieldToUse: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({
    field,
    fieldToUse,
    checkboxFieldPath: checkboxFieldPathFromProps,
    path,
    readOnly: readOnlyFromProps
}) => {
    const { label } = field;

    const checkboxFieldPath = path?.includes('.')
        ? `${path}.${checkboxFieldPathFromProps}`
        : checkboxFieldPathFromProps;

    const { value, setValue } = useField<string>({ path: path || field.name });

    const { dispatchFields } = useForm();

    // The value of the checkbox
    // We're using separate useFormFields to minimise re-renders
    const checkboxValue = useFormFields(([fields]) => {
        return fields[checkboxFieldPath]?.value as string;
    });

    // The value of the field we're listening to for the slug
    const targetFieldValue = useFormFields(([fields]) => {
        return fields[fieldToUse]?.value as string;
    });

    useEffect(() => {
        if (checkboxValue) {
            if (targetFieldValue) {
                const formattedSlug = formatSlug(targetFieldValue);

                if (value !== formattedSlug) setValue(formattedSlug);
            } else {
                if (value !== '') setValue('');
            }
        }
    }, [targetFieldValue, checkboxValue, setValue, value]);

    const handleLock = useCallback(
        (e: React.MouseEvent<Element, MouseEvent>) => {
            e.preventDefault();

            dispatchFields({
                type: 'UPDATE',
                path: checkboxFieldPath,
                value: !checkboxValue
            });
        },
        [checkboxValue, checkboxFieldPath, dispatchFields]
    );

    const readOnly = readOnlyFromProps || checkboxValue;

    return (
        <div className="field-type slug-field-component">
            <div className="label-wrapper">
                <FieldLabel htmlFor={`field-${path}`} label={label} />

                <Button className="lock-button" onClick={handleLock} buttonStyle="none">
                    {checkboxValue ? 'Odblokuj' : 'Zablokuj'}
                </Button>
            </div>

            <TextInput
                readOnly={Boolean(readOnly)}
                path={path || field.name}
                onChange={setValue}
                value={value}
            />
        </div>
    );
};
