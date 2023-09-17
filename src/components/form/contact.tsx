import React, { useCallback } from 'react';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { Button } from '../buttons';
import { styled } from '../theme';
import { TextInput, Textarea } from './inputs';

const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

export interface ContactFormProps {
    className?: string;
    url: string;
    zIndex?: number;
    onSubmit: () => void;
    onError: (err: Error) => void;
}

export function ContactForm({
    className,
    url,
    zIndex,
    onSubmit,
    onError,
}: ContactFormProps) {
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();

        const {
            target: [
                { value: firstName },
                { value: lastName },
                { value: email },
                { value: phoneNumber },
                { value: message },
            ],
        } = event;

        setLoading(true);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                message,
            }),
        })
            .then(() => {
                onSubmit();
            })
            .catch(onError)
            .finally(() => setLoading(false));
    }, []);

    return (
        <Form
            id="contact-form"
            sx={{ zIndex, position: zIndex ? 'relative' : undefined }}
            className={className}
            onSubmit={handleSubmit}
        >
            <Grid
                container
                spacing={3}
                alignItems={'center'}
                justifyContent={'center'}
                maxWidth={768}
            >
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="firstName-input"
                        name="firstName"
                        placeholder="First name*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="lastName-input"
                        name="lastName"
                        placeholder="Last name*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="email-input"
                        name="email"
                        placeholder="Email*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="phoneNumber-input"
                        name="phoneNumber"
                        placeholder="Phone number*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12}>
                    <Textarea
                        id="message-input"
                        name="message"
                        placeholder="Message*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                    >
                        <Button
                            id="submit-button"
                            type="submit"
                            disabled={loading}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Form>
    );
}
